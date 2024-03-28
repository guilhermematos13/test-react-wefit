import { Container } from "@components/Container";
import MyCartIcon from "@assets/MyCartIcon.svg";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CheckoutContext } from "@context/CheckoutContext";

export function Header() {
  const { getTotalItems } = useContext(CheckoutContext);
  const navigate = useNavigate();

  return (
    <Container>
      <S.HeaderContainer>
        <S.PageTitleButton onClick={() => navigate("/")}>
          We Movies
        </S.PageTitleButton>
        <S.MyCartButton onClick={() => navigate("/checkout")}>
          <S.MyCartTextContainer>
            <p>Meu carrinho</p>
            <span>{getTotalItems()} itens</span>
          </S.MyCartTextContainer>
          <img src={MyCartIcon} />
        </S.MyCartButton>
      </S.HeaderContainer>
    </Container>
  );
}
