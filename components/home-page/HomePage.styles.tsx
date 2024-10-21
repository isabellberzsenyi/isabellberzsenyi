import styled from "styled-components";
import { colors } from "../../style/colors";
import { CtaItalic, fonts, fontWeights, H2, H2Italic } from "../../style/typography";
import { jump } from "@/style/animation";

const HomeTitleWrapper = styled.div`
  margin: auto;
  width: 70%;
`;

const CtaArrowWrapper = styled(CtaItalic)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const CtaArrow = styled.span`
  display: inline-block;
  transform: rotate(90deg);
  font-size: 24px; // Adjust size as needed
  margin-top: 10px;
  animation: ${jump} 1s ease-in-out infinite;
`;

const PinkArchContainer = styled.div`
  height: 20em;
  overflow: hidden;
`;

const PinkArch = styled.div`
  width: 110vw;
  background: ${colors.BABY_PINK};
  margin: 5vw 0 0 -5vw;
  height: 40em;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 50%;
`;

const AboutSectionContainer = styled.div`
  background: ${colors.BABY_PINK};
  padding-bottom: 8em;
`;

const AboutSectionH2 = styled(H2Italic)`
  position: relative;
  z-index: 3;
`;

const AboutTextImageWrapper = styled.div`
  display: flex;
  margin-left: 25%;
  align-items: center;
  margin-top: -3em;
  position: relative;
`;

const AboutTextWrapper = styled.div`
  width: 30em;
  text-align: left;
  margin-top: 2em;
  z-index: 2;
`;

const AboutSectionSubheader = styled.h3`
  color: ${colors.BLACK};
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1.5em;
  line-height: 1.4em;
`;

const WorkLinkWrapper = styled.div`
  margin-top: 3em;
`;

const WorkLink = styled(CtaItalic)`
  padding-top: 1em;
  font-size: 1.75em;
`;

const WorkSectionContainer = styled.div`
  height: 100vh;
  margin-top: 8em
`;

const WorkSectionH2 = styled(H2)`
  text-align: left;
  margin-left: 10%;
`;

const WorkPreviewContainer = styled.div`
  max-width: 110vw;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-left: -10%;
  margin-top: 2em;
  margin-bottom: 2em;
  position: relative;
  padding-left: 10%;
  
  &::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const WorkPreviewItem = styled.div`
  margin: 1em 1em 1em 0;
  padding: 1em 1em 1em 0;
  min-width: 50em;
  text-align: left;
`;

interface WorkPreviewImageProps {
  imageUrl: string;
}

const WorkPreviewImage = styled.div<WorkPreviewImageProps>`
  border-radius: 10px;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 700px;
  height: 400px;

  &::before {
    border-radius: 10px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    border-radius: 10px;
    background-color: transparent;
  }
`;


export { 
  CtaArrowWrapper,
  AboutSectionSubheader, 
  WorkLink, 
  WorkPreviewContainer, 
  HomeTitleWrapper,
  PinkArchContainer,
  PinkArch,
  AboutSectionContainer,
  AboutSectionH2,
  AboutTextImageWrapper,
  AboutTextWrapper,
  WorkLinkWrapper,
  WorkSectionContainer,
  WorkSectionH2,
  WorkPreviewItem,
  WorkPreviewImage,
  CtaArrow
};
