"use client";
import styled from "styled-components";
import { colors } from "./colors";

const fonts = {
  editorialOld: 'PP Editorial Old, sans-serif',
  neueMontreal: 'PP Neue Montreal, sans-serif',
};

const fontStyles = {
  italic: 'italic',
};

const fontWeights = {
  light: 200,
  normal: 400,
  bold: 500,
}

const H1 = styled.h1`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  font-size: 7.5em;
`;

const H2 = styled.h2`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  font-size: 5.5em;
`;

const H2Italic = styled(H2)`
  font-style: ${fontStyles.italic};
`;

export { H1, H2, H2Italic, fontWeights, fonts };
