'use client';
import { min } from '@/lib/responsive';
import { colors } from '@/style/colors';
import { CtaItalic, fontWeights } from '@/style/typography';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: ${colors.LIGHT_GREEN};
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 3.5em;
  padding-right: 3.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${min.tablet} {
    flex-direction: row;
  }

  @media ${min.desktop} {
    padding-right: 5em;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  @media ${min.mobileLg} {
    width: 75%;
  }

  @media ${min.tabletSm} {
    width: 45%;
    margin: 0;
  }

  @media ${min.desktop} {
    width: 20%;
  }
`;

const FooterCtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;

  @media ${min.mobileLg} {
    width: 75%;
    margin: auto;
  }

  @media ${min.tabletSm} {
    width: 100%;
    margin: 0;
  }
`;

const EmailCtaWrapper = styled(CtaItalic)`
  font-size: 20px;
  font-weight: ${fontWeights.light};
`;

const EmailLinkWrapper = styled(CtaItalic)`
  @media ${min.tabletSm} {
    font-size: 30px;
  }

  @media ${min.tabletLg} {
    font-size: 40px;
  }
`;

export { 
  FooterContainer, 
  FooterLinksWrapper, 
  FooterCtaWrapper,
  EmailLinkWrapper,
  EmailCtaWrapper
 };