import RadioBtn from './RadioBtn'
import FeedbackCheckbox from './FeedbackCheckbox'
import { HeaderThree } from '../shared/HeaderThree'
import { Rating } from './Rating'
import { StyledInput } from '../shared/StyledInput'
import { ContentWrapper } from '../shared/ContentWrapper'
import RadioGroup from './RadioGroup'

export default function ThirdStage({ feedbackField, handleChange, stars }) {
  return (
    <ContentWrapper display='flex' flexDirection='column'>
      <ContentWrapper
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='900px'
        backgroundColor='#f6f8fd'
        gap='2rem'
        padding='2rem 0 6rem 0'
      >
        <HeaderThree>Feedback</HeaderThree>
        <ContentWrapper
          display='flex'
          padding='2rem 2.5rem'
          backgroundColor='#ffffff'
          width='724px'
          height='251px'
          flexDirection='column'
        >
          <RadioGroup
            titles={['Confirm next stage', 'Not suitable for the next stage']}
            flexDirection='column'
            gap='10px'
          />
          <ContentWrapper
            display='flex'
            flexDirection='column'
            margin='13px 0 0 0'
          >
            <FeedbackCheckbox title='Not suitable due to lack of specialized experience' />
            <FeedbackCheckbox title='Did not fit in soft skills' />
            <FeedbackCheckbox title='Bad test' />
            <FeedbackCheckbox title='Other' />
          </ContentWrapper>
        </ContentWrapper>
        <ContentWrapper
          display='flex'
          justifyContent='space-around'
          backgroundColor='#ffffff'
          width='724px'
          padding='2rem 2.5rem'
        >
          <Rating title='Team Player' stars={stars} onChange={handleChange} />
          <Rating
            title='Professional Skills'
            stars={stars}
            onChange={handleChange}
          />
          <Rating title='Parameter #3' stars={stars} onChange={handleChange} />
        </ContentWrapper>
        <StyledInput
          type='text'
          id='feedbackField'
          name='feedbackField'
          value={feedbackField}
          onChange={handleChange}
          placeholder='Your feedback'
          width='724px'
        />
      </ContentWrapper>
    </ContentWrapper>
  )
}
