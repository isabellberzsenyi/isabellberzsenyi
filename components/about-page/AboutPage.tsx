import { AboutPageDocumentData, SharedDocumentData } from "@/prismicio-types"
import { colors } from "@/style/colors";
import { CtaItalic, H3, H3Italic, P } from "@/style/typography";
import { RTParagraphNode } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import YellowPill from "../yellow-pill/YellowPill";
import CeramicsImage from "./AboutPage.styles";

interface AboutPageProps {
  aboutPageData: AboutPageDocumentData;
  sharedData: SharedDocumentData;
}

export default function AboutPage({ aboutPageData, sharedData }: AboutPageProps) {
  const {
    about_title_row_1: aboutTitleRow1,
    about_title_row_2_italic: aboutTitleRow2Italic,
    about_title_row_2_normal: aboutTitleRow2Normal,
    about_title_row_3: aboutTitleRow3,
    about_paragraph: aboutParagraph,
    ceramics_title: ceramicsTitle,
    ceramics_paragraph: ceramicsParagraph,
    instagram_handle: instagramHandle,
    slices: ceramicsImageSlices
  } = aboutPageData;

  const {
    yellow_text: yellowText,
    headshot: headshot
  } = sharedData;

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1em' }}>  
        <div style={{ paddingLeft: '10%', width: '53%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <H3>{aboutTitleRow1}</H3>
            <H3Italic 
              style={{ textDecoration: 'underline', textDecorationColor: colors.BABY_PINK }}
            >
              {aboutTitleRow2Italic}&nbsp;
            </H3Italic>
            <H3>{aboutTitleRow2Normal}</H3>
            <H3>{aboutTitleRow3}</H3>
          </div>
          {
            yellowText && <YellowPill text={yellowText} />
          }
          {aboutParagraph.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <div key={idx} style={{ marginBottom: '1em', width: '90%' }}>
                <P>{textNode.text}</P>
              </div>
            );
          })}
        </div>
        <PrismicNextImage 
          style={{ marginLeft: '5em', filter: 'grayscale(100%)', borderRadius: '10px' }}
          field={headshot} 
          width={headshot.dimensions?.width || 100} 
          height={headshot.dimensions?.height || 100} 
        />
      </div>
      <div style={{ marginTop: '7em', backgroundColor: colors.PEACH, paddingTop: '5em', paddingBottom: '5em' }}>
        <H3 style={{ paddingLeft: '10%'}}>{ceramicsTitle}</H3>
        <div style={{ width: '45%', paddingLeft: '10%'}}>
          {ceramicsParagraph.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <div key={idx} style={{ marginBottom: '1em' }}>
                <P>{textNode.text}</P>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: '7em', position: 'relative', marginBottom: '2em' }}> 
          <div style={{
                maxWidth: '110vw',
                display: 'flex',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                marginLeft: '-10%',
                paddingLeft: '10%'
              }}
          >
            <div style={{ flex: '0 0 10%'}}></div>
            {
              ceramicsImageSlices.map((slice, idx) => {
                return slice.items.map((item, idx) => {
                  const url = item.image.url || '';
                  return (
                    <CeramicsImage key={idx} imageUrl={url} />
                  )
                });
            })}
          </div>
        </div>
        <CtaItalic href={`https://www.instagram.com/${instagramHandle}`} style={{paddingLeft: '10%'}}>
          @{instagramHandle}
        </CtaItalic>
      </div>
    </div>
  )
};