import { keyframes } from "styled-components";

const jump = keyframes`
  0% { transform: translateY(0) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(90deg); }
  100% { transform: translateY(0) rotate(90deg); }
`;

export {
  jump
};