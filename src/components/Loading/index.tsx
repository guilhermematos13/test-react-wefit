import { LoadingProps } from "./interface";
import * as S from "./styles";

export function Loading({ spacing }: LoadingProps) {
  return (
    <S.LoadingContainer spacing={spacing}>
      <S.Loading />
    </S.LoadingContainer>
  );
}
