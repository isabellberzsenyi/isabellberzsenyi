'use client';
import styled from "styled-components";
import Link from 'next/link';
import { PrismicNextImage } from "@prismicio/next";

const EmptyScrollDiv = styled.div`
  flex: 0 0 10%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const HeadshotImage = styled(PrismicNextImage)`
  margin-left: 5em;
  filter: grayscale(100%);
  border-radius: 10px;
  z-index: 1;
`;

export { EmptyScrollDiv, StyledLink, HeadshotImage };