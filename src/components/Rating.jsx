import { useState } from 'react'
import { ContentWrapper } from '../shared/ContentWrapper'
import { HeaderThree } from '../shared/HeaderThree'
import Star from './Star'

export function Rating({ title, onChange }) {
  const [rating, setRating] = useState(0)
  return (
    <ContentWrapper flexDirection='column' alignItems='center' gap='5px'>
      <HeaderThree>{title}</HeaderThree>
      <Star
        name='stars'
        onChange={onChange}
        rating={rating}
        count={5}
        onRatingChange={(rate) => setRating(rate)}
      />
    </ContentWrapper>
  )
}
