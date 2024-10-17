import { YellowPillWrapper, YellowPillText } from "./YellowPill.styles";

interface YellowPillProps {
  text: string;
}

export default function YellowPill({ text }: YellowPillProps) {
  return (
    <YellowPillWrapper>
      <YellowPillText>
        {text.toUpperCase()}
      </YellowPillText>
    </YellowPillWrapper>
  )
}