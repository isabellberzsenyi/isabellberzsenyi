'use client';
import styled from "styled-components";

interface CeramicsImageProps {
  imageUrl: string;
}

const CeramicsImage = styled.div<CeramicsImageProps>`
  border-radius: 10px;
  margin-right: 1em;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  min-width: 330px;
  height: 440px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFE9CC70;
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: transparent;
  }
`;

export default CeramicsImage;
