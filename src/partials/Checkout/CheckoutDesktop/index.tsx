import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import TrashIcon from "@assets/TrashIcon.svg";

import * as S from "./styles";
import * as StyledCommon from "@partials/styles";
import { formatCurrency } from "@utils/formatCurrency";
import { useContext } from "react";
import { CheckoutContext } from "@context/CheckoutContext";
import { CheckoutProps } from "@partials/interface";

export function CheckoutDesktop({ handleFinishedOrder }: CheckoutProps) {
  const {
    products,
    getTotalPrice,
    updateQuantity,
    removeProduct,
    getTotalPriceById,
  } = useContext(CheckoutContext);

  return (
    <S.CheckoutContainer>
      <S.CheckoutGridContainer>
        <S.CheckoutTitle>Produto</S.CheckoutTitle>
        <S.CheckoutTitle />
        <S.CheckoutTitle>QTD</S.CheckoutTitle>
        <S.CheckoutTitle>Subtotal</S.CheckoutTitle>
        <S.CheckoutTitle />
      </S.CheckoutGridContainer>
      <S.CheckoutScrollContainer>
        {products.map((product) => (
          <S.CheckoutGridContainer key={product.id}>
            <S.CheckoutImage src={product.image} />
            <S.CheckoutMovieTitleContainer>
              <StyledCommon.CheckoutMovieTitle>
                {product.title}
              </StyledCommon.CheckoutMovieTitle>
              <StyledCommon.CheckoutMoviePrice>
                {formatCurrency(product.price)}
              </StyledCommon.CheckoutMoviePrice>
            </S.CheckoutMovieTitleContainer>
            <Counter
              onClickMinus={() => updateQuantity(product.id, -1)}
              onClickPlus={() => updateQuantity(product.id, 1)}
              quantityValue={product.quantity ?? 1}
            />
            <StyledCommon.CheckoutTotalText>
              {formatCurrency(getTotalPriceById(product.id))}
            </StyledCommon.CheckoutTotalText>

            <S.CheckoutTrashButtonContainer>
              <StyledCommon.CheckoutTrashButton
                onClick={() => removeProduct(product.id)}
              >
                <img src={TrashIcon} />
              </StyledCommon.CheckoutTrashButton>
            </S.CheckoutTrashButtonContainer>
          </S.CheckoutGridContainer>
        ))}
      </S.CheckoutScrollContainer>
      <StyledCommon.CheckoutDivider />
      <S.CheckoutFooterContainer>
        <Button onClick={handleFinishedOrder}>Finalizar Pedido</Button>
        <StyledCommon.CheckoutFooterTotalContainer>
          <StyledCommon.CheckoutFooterTotalText>
            TOTAL
          </StyledCommon.CheckoutFooterTotalText>
          <StyledCommon.CheckoutFooterValueText>
            {formatCurrency(getTotalPrice())}
          </StyledCommon.CheckoutFooterValueText>
        </StyledCommon.CheckoutFooterTotalContainer>
      </S.CheckoutFooterContainer>
    </S.CheckoutContainer>
  );
}
