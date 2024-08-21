import Loader from 'react-loader-spinner'

const styling = {
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const LoaderView = () => (
  <div data-testid="loader" style={styling}>
    <Loader type="ThreeDots" color="#328af2" height={50} width={50} />
  </div>
)

export default LoaderView
