import { min } from "@/lib/responsive";
import { colors } from "@/style/colors";
import { fontWeights, H3 } from "@/style/typography";
import styled from "styled-components";

const NavigationContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.CANVAS};

  @media ${min.desktop} {
    padding: 2em 5em;
  }
`;

const NavigationH3 = styled(H3)`
  font-weight: ${fontWeights.light};
  font-size: 33px;
  width: 10px;
  line-height: 33px;
`;

const NavigationLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-items: flex-end;
  width: 25%;
`;

export {
  NavigationContainer,
  NavigationH3,
  NavigationLinksContainer
  };
