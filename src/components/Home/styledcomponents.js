import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 20px 8%;
  height: 10vh;
  background-color: #f1f5f9;
`
export const Logo = styled.img`
  width: 15%;
  max-width: 120px;
`
export const Content = styled.div`
  padding: 5% 7%;
  display: flex;
  flex-direction: column;
`

export const Options = styled.select`
  width: 40%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const Option = styled.option``

export const UnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`

export const List = styled.li`
  list-style: none;
  width: 23%;
  margin-right: 14px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 16px 0px #e2e8f0;

  @media screen and (max-width: 576px) {
    width: 48%;
    margin-right: 0px;
  }
`
export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Para = styled.p`
  color: #475569;
  font-size: large;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
  margin-left: 10px;
`
export const FailureImg = styled.img`
  width: 80%;
  max-width: 400px;
`
export const FailureBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
`
export const Failureh1 = styled.h1`
  color: #475569;
  font-size: xx-large;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Failurep = styled.p`
  color: #cbd5e1;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
`
export const Button = styled.button`
  background-color: #328af2;
  font-size: small;
  font-weight: bold;
  font-family: 'Roboto';
  width: 120px;
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
