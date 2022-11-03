import { StyledP } from '../shared/StyledP'
import StyledCheckboxComponent from './StyledCheckboxComponent'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function Checkbox({ name }) {
  return (
    <ContentWrapper display='flex' alignItems='center' gap='5px'>
      <StyledCheckboxComponent />
      <StyledP>{name}</StyledP>
    </ContentWrapper>
  )
}
