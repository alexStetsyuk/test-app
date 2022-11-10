import { HeaderThree } from '../shared/HeaderThree'
import DeleteMemberIcon from '../icons/DeleteMemberIcon'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function TeamMember({ name, deleteMember, id }) {
  function memberNameSlicer(memberName) {
    if (memberName.length <= 17) {
      return memberName
    } else {
      return memberName.slice(0, 13).concat('...')
    }
  }
  return (
    <ContentWrapper
      alignItems='center'
      justifyContent='space-around'
      height='36px'
      padding='0 0.4rem'
      gap='0.4rem'
      backgroundColor='#ecf0f5'
      borderRadius='4px'
    >
      <HeaderThree title={name}>{memberNameSlicer(name)}</HeaderThree>
      <ContentWrapper cursor='pointer' onClick={() => deleteMember(id)}>
        <DeleteMemberIcon />
      </ContentWrapper>
    </ContentWrapper>
  )
}
