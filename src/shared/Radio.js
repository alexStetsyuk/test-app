import styled from 'styled-components'

const Radio = styled.input`
  background-color: #fff;
  border: 3px solid #aab4bd;
  appearance: none;
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  transition: all ease-in 0.2s;

  &:checked {
    position: relative;
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    background-size: 50%;
    border: 3px solid #4ec970;
    &:before {
      content: '';
      position: absolute;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #4ec970;
      left: 50%;
      transform: translate(-50%, 25%);
    }
  }
`

export default Radio
