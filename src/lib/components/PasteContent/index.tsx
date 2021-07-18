import SyntaxHighlighter from 'react-syntax-highlighter';
import styled, { css } from 'styled-components';

export const PasteContent = styled(SyntaxHighlighter)`
  ${({ font }) => {
    return css`
      width: 100%;
      height: 100%;

      & > code {
        width: 100%;
        height: 100%;
        font-family: ${font};
      }
    `;
  }}
`;
