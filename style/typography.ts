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
  line-height: 1.25em;
  font-size: 7.5em;
  margin: 0;
`;

const H2 = styled.h2`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  font-size: 5.25em;
  margin: 0;
`;

const H2Italic = styled(H2)`
  font-style: ${fontStyles.italic};
`;

const H3 = styled.h3`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  margin: 0;
  font-size: 3.75em;
`;

const H3Italic = styled(H3)`
  font-style: ${fontStyles.italic};
`;

const YellowPill = styled.div`
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1em;
  background-color: ${colors.SUN_YELLOW};
  color: ${colors.BLACK};
  padding: 0.5em 1em;
  border-radius: 0.9em;
  display: inline-block;
`;

const CtaItalic = styled.a`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  font-size: 1.1em;
  color: ${colors.BLACK};
  font-style: ${fontStyles.italic};
`;

const P = styled.p`
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.normal};
  font-size: 1.3em;
  line-height: 1.6em;
  color: ${colors.BLACK};
`;

export { fontWeights, fonts, H1, H2, H2Italic, H3, H3Italic, YellowPill, CtaItalic, P };
