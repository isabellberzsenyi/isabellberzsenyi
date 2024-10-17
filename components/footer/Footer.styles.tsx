'use client';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { StyledLink };