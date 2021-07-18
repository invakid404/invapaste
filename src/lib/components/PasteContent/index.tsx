import SyntaxHighlighter from 'react-syntax-highlighter';
import styled, { css } from 'styled-components';

interface Props {
  font: string;
}

export const PasteContent = styled(SyntaxHighlighter)<Props>`
  ${({ font }: Props) => {
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
