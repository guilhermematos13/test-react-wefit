import { CardProps } from "./interface";
import ShoppingCardIcon from "@assets/ShoppingCardIcon.svg";
import * as S from "./styles";
import { Button } from "@components/Button";

export function Card({ image, title, quantity, onClick }: CardProps) {
  return (
    <S.CardContainer>
      <S.CardImage src={image} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardPrice>R$30.00</S.CardPrice>
      <Button onClick={onClick} $active={quantity > 0} $full>
        <S.CardButtonQuantityContainer $active={quantity > 0}>
          <img src={ShoppingCardIcon} />
          {quantity}
        </S.CardButtonQuantityContainer>
        {quantity > 0 ? "Item Adicionado" : "Adicionar ao Carrinho"}
      </Button>
    </S.CardContainer>
  );
}
