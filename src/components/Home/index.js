import {Component} from 'react'
import LoaderView from '../Loader'
import {
  Header,
  Logo,
  Content,
  Option,
  Options,
  UnList,
  List,
  Image,
  Para,
  FailureBox,
  FailureImg,
  Failureh1,
  Failurep,
  Button,
} from './styledcomponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstraints = {
  initial: 'INITIAL',
  inProcess: 'IN_PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstraints.initial,
    list: [],
    option: categoriesList[0].id,
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({
      apiStatus: apiStatusConstraints.inProcess,
    })
    const {option} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${option}`

    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()

      const newData = data.projects.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
      }))

      this.setState({
        apiStatus: apiStatusConstraints.success,
        list: newData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstraints.failure,
      })
    }
  }

  onChangeOption = event => {
    this.setState(
      {
        option: event.target.value,
      },
      this.getList,
    )
  }

  renderSuccesView = () => {
    const {list} = this.state
    return (
      <UnList>
        {list.map(each => (
          <List key={each.id}>
            <Image src={each.imageUrl} alt={each.name} />
            <Para>{each.name}</Para>
          </List>
        ))}
      </UnList>
    )
  }

  renderFailureView = () => (
    <FailureBox>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <Failureh1>Oops! Something Went Wrong</Failureh1>
      <Failurep>We cannot seem to find the page you are looking for</Failurep>
      <Button type="button" onClick={this.getList}>
        Retry
      </Button>
    </FailureBox>
  )

  renderStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inProcess:
        return <LoaderView />
      case apiStatusConstraints.success:
        return this.renderSuccesView()
      case apiStatusConstraints.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </Header>

        <Content>
          <Options onChange={this.onChangeOption}>
            {categoriesList.map(each => (
              <Option value={each.id} key={each.id}>
                {each.displayText}
              </Option>
            ))}
          </Options>

          {this.renderStatus()}
        </Content>
      </>
    )
  }
}

export default Home
