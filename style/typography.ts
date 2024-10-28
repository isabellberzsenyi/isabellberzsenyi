"use client";
import styled from "styled-components";
import { colors } from "./colors";
import { min } from "@/lib/responsive";

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
  font-size: 2.3em;
  margin: 0;

  @media ${min.mobileLg} {
    font-size: 3em;
  }

  @media ${min.tabletSm} {
    font-size: 5.2em;
  }

  @media ${min.tablet} {
    font-size: 5.5em;
  }

  @media ${min.tabletLg} {
    font-size: 7.5em;
  }
`;

const H2 = styled.h2`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  font-size: 2em;
  margin: 0;

  @media ${min.mobileLg} {
    font-size: 2.5em;
  }

  @media ${min.tabletSm} {
    font-size: 4.5em;
  }

  @media ${min.tabletLg} {
    font-size: 5.25em;
  }
`;

const H2Italic = styled(H2)`
  font-style: ${fontStyles.italic};
`;

const H3 = styled.h3`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  color: ${colors.BLACK};
  margin: 0;
  font-size: 1.5em;

  @media ${min.mobileLg} {
    font-size: 2em;
  }

  @media ${min.tabletSm} {
    font-size: 3em;
  }

  @media ${min.tabletLg} {
    font-size: 3.6em;
  }

  @media ${min.desktopLg} {
    font-size: 3.8em;
  }
`;

const H3Italic = styled(H3)`
  font-style: ${fontStyles.italic};
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
  font-size: 1.1em;
  line-height: 1.4em;
  color: ${colors.BLACK};

  @media ${min.tabletSm} {
    font-size: 1.3em;
    line-height: 1.6em;
  }
`;

export { fontWeights, fonts, fontStyles, H1, H2, H2Italic, H3, H3Italic, CtaItalic, P };
