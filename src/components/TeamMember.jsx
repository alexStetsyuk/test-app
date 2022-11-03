import styled from 'styled-components'
import { HeaderThree } from '../shared/HeaderThree'

const StyledTeamMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3px;
  width: ${(props) => (props.length > 15 ? '191px' : '167px')};
  height: 36px;
  background: #ecf0f5;
  border-radius: 4px;
`

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

export default function TeamMember({ name }) {
  return (
    <StyledTeamMember length={name.length}>
      <HeaderThree>{name}</HeaderThree>
      <LittleCircle></LittleCircle>
    </StyledTeamMember>
  )
}
