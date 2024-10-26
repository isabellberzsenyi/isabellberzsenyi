
import styled from "styled-components";
import { H2 } from "@/style/typography";
import { ScrollContainer } from "@/style/shared.styles";
import { min } from "@/lib/responsive";

const WorkSectionContainer = styled.div`
  margin-bottom: 5em;
  margin-top: 5em;

  @media ${min.tabletSm} {
    margin-bottom: 0;
    margin-top: 8em;
    height: 100vh;
  }

  @media ${min.desktopLg} {
    height: auto;
    margin-bottom: 8em;
  }
`;

const WorkSectionH2 = styled(H2)`
  text-align: left;
  margin-left: 10%;
`;

const WorkPreviewContainer = styled(ScrollContainer)`
  
  position: relative;

  @media ${min.tabletSm} {
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;

const WorkPreviewItem = styled.div`
  margin: 1em 1em 1em 0;
  padding: 1em 1em 1em 0;
  min-width: 20em;
  text-align: left;

  @media ${min.tabletSm} {
    min-width: 50em;
  }
`;

const WorkPreviewImage = styled.div<{ $imageUrl: string }>`
  border-radius: 10px;
  position: relative;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  width: 300px;
  height: 171px;

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

  @media ${min.tabletSm} {
    width: 700px;
    height: 400px;
  }
`;

export {
  WorkSectionContainer,
  WorkSectionH2,
  WorkPreviewContainer,
  WorkPreviewItem,
  WorkPreviewImage
};