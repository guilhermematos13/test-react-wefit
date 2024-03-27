import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import TrashIcon from "@assets/TrashIcon.svg";

import * as S from "./styles";
import * as StyledCommon from "@partials/styles";
import { CheckoutProps } from "@partials/interface";
import { formatCurrency } from "@utils/formatCurrency";
import { CheckoutContext } from "@context/CheckoutContext";
import { useContext } from "react";

export function CheckoutMobile({ handleFinishedOrder }: CheckoutProps) {
  const {
    products,
    getTotalPrice,
    updateQuantity,
    removeProduct,
    getTotalPriceById,
  } = useContext(CheckoutContext);

  return (
    <S.CheckoutContainer>
      <S.CheckoutScrollContainer>
        {products.map((product) => (
          <S.CheckoutMobileContainer key={product.id}>
            <S.CheckoutImage src={product.image} />
            <S.CheckoutTitleContainer>
              <StyledCommon.CheckoutMovieTitle>
                {product.title}
              </StyledCommon.CheckoutMovieTitle>
              <Counter
                onClickMinus={() => updateQuantity(product.id, -1)}
                onClickPlus={() => updateQuantity(product.id, 1)}
                quantityValue={product.quantity ?? 1}
              />
            </S.CheckoutTitleContainer>
            <S.CheckoutValuesContainer>
              <S.CheckoutTopRightContainer>
                <StyledCommon.CheckoutMoviePrice>
                  {formatCurrency(product.price)}
                </StyledCommon.CheckoutMoviePrice>
                <S.CheckoutTrashButtonContainer>
                  <StyledCommon.CheckoutTrashButton
                    onClick={() => removeProduct(product.id)}
                  >
                    <img src={TrashIcon} />
                  </StyledCommon.CheckoutTrashButton>
                </S.CheckoutTrashButtonContainer>
              </S.CheckoutTopRightContainer>
              <S.CheckoutBottomRightContainer>
                <S.CheckoutPriceTitle>Subtotal</S.CheckoutPriceTitle>
                <StyledCommon.CheckoutTotalText>
                  {formatCurrency(getTotalPriceById(product.id))}
                </StyledCommon.CheckoutTotalText>
              </S.CheckoutBottomRightContainer>
            </S.CheckoutValuesContainer>
          </S.CheckoutMobileContainer>
        ))}
      </S.CheckoutScrollContainer>
      <StyledCommon.CheckoutDivider />
      <S.CheckoutFooterContainer>
        <StyledCommon.CheckoutFooterTotalContainer>
          <StyledCommon.CheckoutFooterTotalText>
            TOTAL
          </StyledCommon.CheckoutFooterTotalText>
          <StyledCommon.CheckoutFooterValueText>
            {formatCurrency(getTotalPrice())}
          </StyledCommon.CheckoutFooterValueText>
        </StyledCommon.CheckoutFooterTotalContainer>
        <Button onClick={handleFinishedOrder} $full>
          Finalizar Pedido
        </Button>
      </S.CheckoutFooterContainer>
    </S.CheckoutContainer>
  );
}
