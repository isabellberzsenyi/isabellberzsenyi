'use client';
import styled from "styled-components";
import { colors } from "../../style/colors";
import { fonts, fontWeights } from "../../style/typography";

const AnimatedLogo = styled.div<{ $fontSize: number; $opacity: number }>`
  font-family: ${fonts.editorialOld};
  font-size: ${props => props.$fontSize}em;
  color: ${colors.BLACK};
  opacity: ${props => props.$opacity};
  font-weight: ${fontWeights.light};
  line-height: 1em;
  transition: font-size 2s, opacity 2s;
  text-align: left;
  display: flex;
  margin-left: 4.5%;
  margin-top: 2%;
  max-height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation: fadeIn 2s ease-in-out;
`;

const MainContent = styled.div<{ $opacity: number }>`
  opacity: ${props => props.$opacity};
  transition: opacity 2s;
`;

export { 
  AnimatedLogo,
  MainContent,
};
