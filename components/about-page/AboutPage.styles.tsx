'use client';
import { colors } from "@/style/colors";
import { ScrollContainer } from "@/style/shared.styles";
import { H3Italic } from "@/style/typography";
import styled from "styled-components";

interface CeramicsImageProps {
  imageUrl: string;
}

const AboutLeftPadding = styled.div`
  padding-left: 10%;
`;

const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
`;

const AboutTextWrapper = styled(AboutLeftPadding)`
  padding-left: 10%;
  width: 53%;
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

const AboutParagraphWrapper = styled.div`
  margin-bottom: 1em;
  width: 90%;
`;

const CeramicSectionContainer = styled.div`
  margin-top: 7em;
  background-color: ${colors.PEACH};
  padding-top: 5em;
  padding-bottom: 5em;
`;

const CeramicsTextWrapper = styled.div`
  width: 45%;
`;

const CeramicsImagesContainer = styled(ScrollContainer)`
  margin-top: 7em;
  position: relative;
  margin-bottom: 2em;
`;

const CeramicsImage = styled.div<CeramicsImageProps>`
  border-radius: 10px;
  margin-right: 1em;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  min-width: 330px;
  height: 440px;

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