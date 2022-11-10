import AddIcon from '../icons/AddIcon'
import SubtractIcon from '../icons/SubtractIcon'
import { ContentWrapper } from '../shared/ContentWrapper'

const Operations = ({ add, subtract, count }) => {
  return (
    <ContentWrapper
      alignItems='center'
      borderRadius='4px'
      border='1px solid #ccd2e3'
      width='112px'
      height='44px'
      backgroundColor='#ffffff'
    >
      <ContentWrapper
        flexGrow='1'
        justifyContent='center'
        alignItems='center'
        onClick={subtract}
        cursor='pointer'
      >
        <SubtractIcon />
      </ContentWrapper>
      <ContentWrapper justifyContent='center' flexGrow='1'>
        {count}
      </ContentWrapper>
      <ContentWrapper
        flexGrow='1'
        justifyContent='center'
        alignItems='center'
        onClick={add}
        cursor='pointer'
      >
        <AddIcon value='add' />
      </ContentWrapper>
    </ContentWrapper>
  )
}

export default Operations
