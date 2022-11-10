import Checkbox from './Checkbox'
import Button from './Button'
import Select from './Select'
import { StyledInput } from '../shared/StyledInput'
import { ContentWrapper } from '../shared/ContentWrapper'
import RadioGroup from './RadioGroup'
import Label from './Label'

export default function FirstStage({
  stageTitle,
  stageSubtitle,
  stageType,
  handleChange,
  checkbox
}) {
  return (
    <ContentWrapper display='flex' flexDirection='column'>
      {/* <Label checkbox={checkbox} handleChange={handleChange} />
      <RadioGroup titles={['one', 'two', 'three']} /> */}
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
          <Select stageType={stageType} handleChange={handleChange} />
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
