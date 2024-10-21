'use client';
import { colors } from "@/style/colors";
import { fontStyles, fontWeights } from "@/style/typography";
import { fonts } from "@/style/typography";
import Link from "next/link";
import styled from "styled-components";

const CaseStudyPageWrapper = styled.div`
  background-color: ${colors.PEACH};
`;

const CaseStudyPageContainer = styled(CaseStudyPageWrapper)`
  backgroundColor: colors.PEACH;
  text-align: center;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  background-color: ${colors.CANVAS};
  padding-top: 5em;
`;

const CaseStudyHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 55%;
  margin: auto;
  justify-content: space-between;
  text-align: left;
`;

const StyledCaseStudyLink = styled(Link)`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  font-style: ${fontStyles.italic};
  color: ${colors.BLACK};
  font-size: 1.1em;
  margin: 1em 2em 1em 0;
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

const CaseStudyImageWrapper = styled.div`
  width: 75%;
  margin: 5em auto 0;
`;

const CaseStudyParagraphContainer = styled.div`
  width: 35%;
  margin: 5em auto 0;
  text-align: left;
  padding-bottom: 8em;
`;

export { 
  CaseStudyPageWrapper,
  CaseStudyPageContainer, 
  CaseStudyHeaderContainer,
  StyledCaseStudyLink, 
  CaseStudyTag, 
  CaseStudyTagDescription,
  CaseStudyImageWrapper,
  CaseStudyParagraphContainer
};
