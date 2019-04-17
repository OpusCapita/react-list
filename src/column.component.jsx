import styled from 'styled-components';

const Column = styled.div`
  min-width: ${props => (props.width === 'auto' ? 'auto' : `${props.width}px`)};
  width: ${props => (props.width === 'auto' ? 'auto' : `${props.width}px`)};
  display: flex;
  padding: 0 ${props => props.theme.halfGutterWidth};
  justify-content: ${props => props.alignment};
  font-size: 1.2rem;
  overflow: hidden;
  height: 100%;
  align-items: center;
`;

export default Column;
