import styled from 'styled-components'

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? '#4EC970' : '#ecf0f5')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#AAB4BD')};
  border-radius: 50%;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
`
