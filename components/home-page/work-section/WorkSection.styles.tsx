
import styled from "styled-components";
import { H2 } from "@/style/typography";
import { ScrollContainer } from "@/style/shared.styles";

const WorkSectionContainer = styled.div`
  height: 100vh;
  margin-top: 8em
`;

const WorkSectionH2 = styled(H2)`
  text-align: left;
  margin-left: 10%;
`;

const WorkPreviewContainer = styled(ScrollContainer)`
  margin-top: 2em;
  margin-bottom: 2em;
  position: relative;
`;

const WorkPreviewItem = styled.div`
  margin: 1em 1em 1em 0;
  padding: 1em 1em 1em 0;
  min-width: 50em;
  text-align: left;
`;

const WorkPreviewImage = styled.div<{ $imageUrl: string }>`
  border-radius: 10px;
  position: relative;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  width: 700px;
  height: 400px;

  &::before {
    border-radius: 10px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    border-radius: 10px;
    background-color: transparent;
  }
`;

export {
  WorkSectionContainer,
  WorkSectionH2,
  WorkPreviewContainer,
  WorkPreviewItem,
  WorkPreviewImage
};