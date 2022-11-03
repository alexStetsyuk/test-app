import styled from 'styled-components'
import { Circle } from '../shared/Circle'
import { HeaderThree } from '../shared/HeaderThree'

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledHr = styled.hr`
  width: 32px;
  height: 4px;
  background: ${(props) => (props.active ? '#4EC970' : '#ecf0f5')};
  border-radius: 4px;
  border: #ecf0f5;
`

export default function Step({ numberOfStep, headerContent, active }) {
  return (
    <StyledStep>
      {numberOfStep !== 1 && <StyledHr active={active} />}
      <Circle active={active}>{numberOfStep}</Circle>
      <HeaderThree>{headerContent}</HeaderThree>
    </StyledStep>
  )
}
