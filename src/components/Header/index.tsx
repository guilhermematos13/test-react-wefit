import { Container } from "@components/Container";
import MyCartIcon from "@assets/MyCartIcon.svg";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
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
            <span>0 itens</span>
          </S.MyCartTextContainer>
          <img src={MyCartIcon} />
        </S.MyCartButton>
      </S.HeaderContainer>
    </Container>
  );
}
