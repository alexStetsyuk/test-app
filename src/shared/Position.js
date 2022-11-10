import styled from 'styled-components'
import { ContentWrapper } from './ContentWrapper'

const Position = styled(ContentWrapper)`
  position: ${(props) => props.position};
  transform: ${(props) => props.transform};
`
export default Position
