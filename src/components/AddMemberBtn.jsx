import AddMemberIcon from '../icons/AddMemberIcon'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function AddMemberBtn({ clickHandler }) {
  return (
    <ContentWrapper cursor='pointer'>
      <AddMemberIcon clickHandler={clickHandler} />
    </ContentWrapper>
  )
}
