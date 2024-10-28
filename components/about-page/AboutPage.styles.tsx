import { min } from "@/lib/responsive";
import { colors } from "@/style/colors";
import { ParagraphWrapper, ScrollContainer } from "@/style/shared.styles";
import { H3Italic } from "@/style/typography";
import styled from "styled-components";

const AboutLeftPadding = styled.div`
  padding-left: 10%;
`;

const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;

  @media ${min.tabletLg} {
    flex-direction: row;
    align-content: center;
  }
`;

const AboutTextWrapper = styled(AboutLeftPadding)`
  padding-left: 10%;

  @media ${min.tabletLg} {
    padding-left: 5%;
    width: 68%;
  }

  @media ${min.desktop} {
    padding-left: 10%;
    width: 53%;
  }

  @media ${min.desktopLg} {
    width: 66%;
  }
`;

const AboutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AboutH3Underline = styled(H3Italic)`
  text-decoration: underline;
  text-decoration-color: ${colors.BABY_PINK};
`;

const AboutParagraphWrapper = styled(ParagraphWrapper)`
  width: 90%;
`;

const CeramicSectionContainer = styled.div`
  margin-top: 5em;
  background-color: ${colors.PEACH};
  padding-top: 5em;
  padding-bottom: 5em;

  @media ${min.tabletSm} {
    margin-top: 7em;
  }
`;

const CeramicsTextWrapper = styled.div`
  width: 80%;
  @media ${min.tabletLg} {
    width: 45%;
  }
`;

const CeramicsImagesContainer = styled(ScrollContainer)`
  margin-top: 5em;
  position: relative;
  margin-bottom: 2em;

  @media ${min.tabletSm} {
    margin-top: 7em;
  }
`;

const CeramicsImage = styled.div<{ $imageUrl: string }>`
  border-radius: 10px;
  margin-right: 1em;
  position: relative;
  background-image: url(${props => props.$imageUrl});
  background-size: contain;
  min-width: 250px;
  height: 330px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFE9CC70;
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: transparent;
  }

  @media ${min.tabletSm} {
    min-width: 330px;
    height: 440px;
  }
`;

export {
  AboutSectionContainer, 
  AboutLeftPadding,
  AboutTextWrapper,
  AboutHeaderWrapper,
  AboutH3Underline,
  AboutParagraphWrapper,
  CeramicSectionContainer,
  CeramicsTextWrapper,
  CeramicsImagesContainer,
  CeramicsImage
};