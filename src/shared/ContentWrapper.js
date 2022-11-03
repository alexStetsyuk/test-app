import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: 8px;
`
