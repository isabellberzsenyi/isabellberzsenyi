'use client';
import styled from "styled-components";
import { colors } from "../../style/colors";
import { fonts } from "../../style/typography";

const AnimatedLogo = styled.div<{ $fontSize: number; $opacity: number }>`
  font-size: ${props => props.$fontSize}em;
  font-weight: 200;
  line-height: 1em;
  opacity: ${props => props.$opacity};
  transition: font-size 2s, opacity 2s;
  text-align: left;
  font-family: ${fonts.editorialOld};
  color: ${colors.BLACK};
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
`;

const MainContent = styled.div<{ $opacity: number }>`
  opacity: ${props => props.$opacity};
  transition: opacity 2s;
`;

export { 
  AnimatedLogo,
  MainContent,
};
