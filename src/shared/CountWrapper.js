import styled from 'styled-components'

const CountWrapper = styled.div`
  display: flex;
  width: 112px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #ccd2e3;
  border-radius: 4px;
  align-items: center;
  button,
  p {
    background: #ffffff;
    width: 37px;
  }
  p {
    display: flex;
    justify-content: center;
  }
  button {
    font-size: 1.2rem;
    border: none;
    border-left: 1px solid #f7f8f9;
    border-right: 1px solid #f7f8f9;
    height: 100%;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`
export default CountWrapper
