import { HomePageDocumentData } from '@/prismicio-types';
import { RichTextNodeType } from '@prismicio/client';
import React from 'react';
import { HomePageContentWrapper } from './HomePage.styles';
import { H1, H2, H2Italic } from '@/style/typography';
import { colors } from '@/style/colors';

interface HomePageProps {
  homePageData: HomePageDocumentData
}

export default function HomePage({ homePageData }: HomePageProps) {
  const {
    home_title: homeTitle,
    yellow_text: yellowText,
    scroll_cta_text: scrollCtaText,
    about_header: aboutHeader,
    about_subheader: aboutSubheader,
    about_paragraph: aboutParagraph,
    work_cta_text: workCtaText,
    work_header: workHeader
  } = homePageData;

  return (
    <div>
      <div style={{ margin: 'auto', width: '75%' }}>
        <H1>{homeTitle}</H1>
      </div>
      <div>
        <div>
          {yellowText?.toUpperCase()}
        </div>
      </div>
      <div>{scrollCtaText}</div>
      <div style={{ background: colors.BABY_PINK }}>
        <H2Italic>{aboutHeader}</H2Italic>
        <div>{aboutSubheader}</div>
        {/* {aboutParagraph.map((node, idx) => {
          return (
            <div key={idx}>{node.text}</div>
          )
        })} */}
        <div>{workCtaText}</div>
      </div>
      <H2>{workHeader}</H2>
    </div>
  );
};
