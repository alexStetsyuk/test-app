import styled from 'styled-components'

const LittleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #fefefe;
  &::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 2px;
    border-radius: 2px;
    background-color: #ccd2e3;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 2px;
    border-radius: 2px;
    background-color: #ccd2e3;
    transform: rotate(-45deg);
  }
`
export default LittleCircle
