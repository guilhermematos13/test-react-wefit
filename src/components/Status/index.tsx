import { Button } from "@components/Button";
import { StatusProps } from "./interface";
import * as S from "./styles";

export function Status({
  imageUrl,
  text,
  onClick,
  buttonText = "Voltar",
}: StatusProps) {
  return (
    <S.StatusContainer>
      <S.StatusTitle>{text}</S.StatusTitle>
      <S.StatusImage src={imageUrl} />
      {onClick && <Button onClick={onClick}>{buttonText}</Button>}
    </S.StatusContainer>
  );
}
