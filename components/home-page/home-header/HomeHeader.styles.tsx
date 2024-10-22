import styled from "styled-components";
import { CtaItalic } from "@/style/typography";
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

export { 
  CtaArrow, 
  CtaArrowWrapper, 
  HomeTitleWrapper 
};