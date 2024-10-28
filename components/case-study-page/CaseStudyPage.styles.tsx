'use client';
import { min } from "@/lib/responsive";
import { colors } from "@/style/colors";
import { fontStyles, fontWeights } from "@/style/typography";
import { fonts } from "@/style/typography";
import Link from "next/link";
import styled from "styled-components";

const CaseStudyPageWrapper = styled.div`
  background-color: ${colors.PEACH};
`;

const CaseStudyPageContainer = styled(CaseStudyPageWrapper)`
  backgroundColor: ${colors.PEACH};
  text-align: center;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  background-color: ${colors.CANVAS};
  padding-top: 5em;
`;

const CaseStudyHeaderWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media ${min.mobileLg} {
    width: 80%;
  }

  @media ${min.tabletLg} {
    width: 60%;
  }
`;

const CaseStudyTitleWrapper = styled.div`
  text-align: left;
`;

const CaseStudyTextContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;

  @media ${min.tabletLg} {
    flex-direction: row;
  }
`;

const CaseStudyLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCaseStudyLink = styled(Link)`
  font-family: ${fonts.editorialOld};
  font-weight: ${fontWeights.normal};
  font-style: ${fontStyles.italic};
  color: ${colors.BLACK};
  font-size: 1.1em;
  margin: 1em 2em 1em 0;
`;

const CaseStudyOverviewWrapper = styled.div`
  @media ${min.tabletLg} {
    width: 80%;
  }
`;

const CaseStudyOverviewLinksWrapper = styled.div`
  @media ${min.desktop} {
    width: 90%;
  }
`;

const CaseStudyTagsWrapper = styled.div`
  margin-top: 1em;

  @media ${min.tabletLg} {
    margin-left: 5em;
  }
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
  margin: 5em auto 0;
`;

const CaseStudyParagraphContainer = styled.div`
  width: 75%;
  margin: 5em auto 0;
  text-align: left;
  padding-bottom: 5em;

  @media ${min.mobileLg} {
    width: 65%;
  }

  @media ${min.tabletSm} {
    width: 50%;
    padding-bottom: 8em;
  }

  @media ${min.desktop} {
    width: 35%;
  }
`;

export { 
  CaseStudyPageWrapper,
  CaseStudyPageContainer, 
  CaseStudyHeaderWrapper,
  CaseStudyTitleWrapper,
  CaseStudyTextContainer,
  StyledCaseStudyLink, 
  CaseStudyTag, 
  CaseStudyTagDescription,
  CaseStudyImageWrapper,
  CaseStudyParagraphContainer,
  CaseStudyOverviewWrapper,
  CaseStudyLinksWrapper,
  CaseStudyOverviewLinksWrapper,
  CaseStudyTagsWrapper
};
