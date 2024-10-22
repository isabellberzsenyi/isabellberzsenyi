import React from 'react';
import {
  WorkSectionContainer,
  WorkSectionH2,
  WorkPreviewContainer,
  WorkPreviewItem,
  WorkPreviewImage
} from './WorkSection.styles';
import { EmptyScrollDiv, StyledLink } from '@/style/shared.styles';
import { CaseStudyPreview } from '@/app/page';
import { H3, P } from '@/style/typography';
import { KeyTextField } from '@prismicio/client';

interface WorkSectionProps {
  workHeader: KeyTextField;
  caseStudyPreviews: CaseStudyPreview[];
}

export default function WorkSection({ workHeader, caseStudyPreviews }: WorkSectionProps) {
  return (
    <WorkSectionContainer>
      <WorkSectionH2 id="projects">{workHeader}</WorkSectionH2>
      <WorkPreviewContainer>
        <EmptyScrollDiv></EmptyScrollDiv>
        {caseStudyPreviews.map((caseStudyPreview: CaseStudyPreview) => (
          <StyledLink
            key={caseStudyPreview.uid}
            href={`/case-study/${caseStudyPreview.uid}`} 
            $noUnderlineOnHover={true}
          >
            <WorkPreviewItem>
              <WorkPreviewImage $imageUrl={caseStudyPreview.imageUrl} />
              <H3 style={{ fontSize: '2.5em', fontWeight: 200 }}>{caseStudyPreview.title}</H3>
              <P style={{ fontSize: '1em', margin: '0' }}>{caseStudyPreview.previewText}</P>
            </WorkPreviewItem>
          </StyledLink>
        ))}
      </WorkPreviewContainer>
    </WorkSectionContainer>
  );
};
