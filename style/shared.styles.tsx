'use client';
import styled from "styled-components";
import Link from 'next/link';
import { PrismicNextImage } from "@prismicio/next";

const EmptyScrollDiv = styled.div`
  flex: 0 0 10%;
`;

const StyledLink = styled(Link)<{ $noUnderlineOnHover?: boolean }>`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: ${props => props.$noUnderlineOnHover ? 'none' : 'underline'};
    cursor: pointer;
  }
`;

const HeadshotImage = styled(PrismicNextImage)`
  margin-left: 5em;
  filter: grayscale(100%);
  border-radius: 10px;
  z-index: 1;
`;

const ScrollContainer = styled.div`
  max-width: 110vw;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-left: -10%;
  padding-left: 10%;

  &::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 1em;
`;

export { EmptyScrollDiv, StyledLink, HeadshotImage, ScrollContainer, ParagraphWrapper };