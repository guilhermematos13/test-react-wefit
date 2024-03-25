import { ButtonProps } from "./interface";
import * as S from "./styles";

export function Button({ $active, children, $full, onClick }: ButtonProps) {
  return (
    <S.Button $active={$active} $full={$full} onClick={onClick}>
      {children}
    </S.Button>
  );
}
