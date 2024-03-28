import { Status } from "@components/Status";
import EmptyCartPagePerson from "@assets/EmptyCartPagePerson.svg";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  return (
    <S.ErrorContainer>
      <Status
        imageUrl={EmptyCartPagePerson}
        text="Algo deu errado! Tente novamente mais tarde."
        onClick={() => navigate("/")}
        buttonText="Recarregar página"
      />
    </S.ErrorContainer>
  );
}
