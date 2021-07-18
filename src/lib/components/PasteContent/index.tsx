import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

export const PasteContent = styled(SyntaxHighlighter)`
  width: 100%;
  height: 100%;

  & > code {
    width: 100%;
    height: 100%;
  }
`;
