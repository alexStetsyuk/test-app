import styled from 'styled-components'

export const StyledCheckbox = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border: ${(props) =>
    props.checked ? '5px solid #3974F6' : '3px solid #AAB4BD'};
  border-radius: 4px;
  &:before {
    content: '';
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 7px;
    width: 7px;
    background: ${(props) => (props.checked ? '#5a9cff' : null)};
    border-radius: 1px;
  }
`
