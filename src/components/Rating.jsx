import { ContentWrapper } from '../shared/ContentWrapper'
import { HeaderThree } from '../shared/HeaderThree'
import Star from './Star'

export function Rating({ title }) {
  return (
    <ContentWrapper flexDirection='column' alignItems='center' gap='5px'>
      <HeaderThree>{title}</HeaderThree>
      <Star count={4} />
    </ContentWrapper>
  )
}
