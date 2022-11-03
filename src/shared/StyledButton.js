import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  border: ${(props) => (!props.backgroundColor ? '2px solid #5a9cff' : 'none')};
  border-radius: 30px;
  color: ${(props) => props.contentColor || '#505b67'};
  background: ${(props) => props.backgroundColor || 'transparent'};
  box-shadow: ${(props) =>
    props.boxShadow ? '0px 4px 10px rgba(57, 116, 246, 0.2)' : null};
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => (props.backgroundColor ? '600' : null)};
  margin-top: ${(props) => props.mgTop || null};
`
