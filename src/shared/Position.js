import styled from 'styled-components'
import { ContentWrapper } from './ContentWrapper'

const Position = styled(ContentWrapper)`
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.zIndex};
  transition: all 0.3s ease;
`
export default Position
