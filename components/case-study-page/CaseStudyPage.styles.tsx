'use client';
import { colors } from "@/style/colors";
import { fontStyles, fontWeights } from "@/style/typography";
import { fonts } from "@/style/typography";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import styled from "styled-components";


const StyledCaseStudyLink = styled(Link)`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  font-style: ${fontStyles.italic};
  font-size: 1.1em;
  color: ${colors.BLACK};
`;

const CaseStudyTag = styled.p`
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 0.9em;
  color: ${colors.BLACK};
  margin: 0;
`;

const CaseStudyTagDescription = styled(CaseStudyTag)`
  font-weight: ${fontWeights.normal};
  font-size: 1em;
`;

export { StyledCaseStudyLink, CaseStudyTag, CaseStudyTagDescription };