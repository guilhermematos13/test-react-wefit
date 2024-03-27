import { Status } from "@components/Status";
import SuccessPagePerson from "@assets/SuccessPagePerson.svg";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function Success() {
  const navigate = useNavigate();

  return (
    <S.SuccessContainer>
      <Status
        imageUrl={SuccessPagePerson}
        text="Compra realizada com sucesso!"
        onClick={() => navigate("/")}
      />
    </S.SuccessContainer>
  );
}
