import styled from 'styled-components'
import { StyledP } from '../shared/StyledP'
import StyledCheckboxComponent from './StyledCheckboxComponent'
import { HeaderThree } from '../shared/HeaderThree'
import { ContentWrapper } from '../shared/ContentWrapper'

const StyledMemberVote = styled.div`
  display: flex;
  width: 572px;
  height: 36px;
  background: #ffffff;
  border-radius: 4px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`

export default function MemberVote({ name }) {
  return (
    <StyledMemberVote>
      <HeaderThree>{name}</HeaderThree>
      <ContentWrapper display='flex' alignItems='center' gap='5px'>
        <StyledCheckboxComponent />
        <StyledP>Veto</StyledP>
      </ContentWrapper>
    </StyledMemberVote>
  )
}
