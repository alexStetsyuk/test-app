import { ContentWrapper } from '../shared/ContentWrapper'
import { StyledP } from '../shared/StyledP'

const CustomSelect = ({ title, handleChangeTitle, id, checkedHandler }) => {
  function changeHandler() {
    handleChangeTitle(id)
    checkedHandler()
  }
  return (
    <ContentWrapper cursor='pointer' padding='7px' onClick={changeHandler}>
      <StyledP>{title}</StyledP>
    </ContentWrapper>
  )
}

export default CustomSelect
