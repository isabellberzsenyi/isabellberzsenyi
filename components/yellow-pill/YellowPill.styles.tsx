'use client';
import { fonts, fontWeights } from "@/style/typography";
import { colors } from "@/style/colors";
import styled from "styled-components";

const YellowPillWrapper = styled.div`
  padding-bottom: 3em;
  padding-top: 2em;
`;

const YellowPillText = styled.div`
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1em;
  background-color: ${colors.SUN_YELLOW};
  color: ${colors.BLACK};
  padding: 0.5em 1em;
  border-radius: 0.9em;
  display: inline-block;
`;

export { YellowPillWrapper, YellowPillText };