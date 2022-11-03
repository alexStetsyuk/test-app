import StyledCheckboxComponent from './StyledCheckboxComponent'
import { StyledP } from '../shared/StyledP'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function FeedbackCheckbox({ title }) {
  return (
    <ContentWrapper
      alignItems='center'
      gap='7px'
      padding='5px'
      margin='0 0 0 1.3rem'
    >
      <StyledCheckboxComponent />
      <StyledP>{title}</StyledP>
    </ContentWrapper>
  )
}
