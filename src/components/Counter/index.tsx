import MinusIcon from "@assets/MinusIcon.svg";
import PlusIcon from "@assets/PlusIcon.svg";

import * as S from "./styles";
import { CounterProps } from "./interface";

export function Counter({
  onClickMinus,
  onClickPlus,
  quantityValue,
}: CounterProps) {
  return (
    <S.CounterContainer>
      <S.CounterQuantityButtons onClick={onClickMinus}>
        <S.CounterQuantityIcons src={MinusIcon} />
      </S.CounterQuantityButtons>
      <S.CounterQuantityInput value={quantityValue} disabled />
      <S.CounterQuantityButtons onClick={onClickPlus}>
        <S.CounterQuantityIcons src={PlusIcon} />
      </S.CounterQuantityButtons>
    </S.CounterContainer>
  );
}
