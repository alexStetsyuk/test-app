import Checkbox from './Checkbox'
import Button from './Button'
import { StyledInput } from '../shared/StyledInput'
import { ContentWrapper } from '../shared/ContentWrapper'
import Multiselect from './Multiselect'

export default function FirstStage({
  stageTitle,
  stageSubtitle,
  stageType,
  handleChange,
  checkbox
}) {
  return (
    <ContentWrapper display='flex' flexDirection='column'>
      <ContentWrapper
        display='flex'
        width='900px'
        flexDirection='column'
        alignItems='center'
        backgroundColor='#f6f8fd'
      >
        <ContentWrapper
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          gap='0.7rem'
          padding='4rem 8rem'
        >
          <StyledInput
            type='text'
            id='stageTitle'
            name='stageTitle'
            placeholder='Stage Title'
            value={stageTitle}
            onChange={handleChange}
          />
          <StyledInput
            type='text'
            placeholder='Stage Subtitle'
            id='stageSubtitle'
            name='stageSubtitle'
            value={stageSubtitle}
            onChange={handleChange}
          />
          <Multiselect
            titles={['Test Task', 'Accepted', 'Done']}
            height='42px'
            width='640px'
            right='2%'
            top='23rem'
          />
          <br />
          <ContentWrapper display='flex' flexDirection='column' gap='0.7rem'>
            <Checkbox name='Candidate can upload files' />
            <Checkbox name='Candidate can download files' />
            <Button
              fileBtn={true}
              alignSelf='center'
              buttonLabel='Select file...'
            />
          </ContentWrapper>
        </ContentWrapper>
      </ContentWrapper>
    </ContentWrapper>
  )
}
