import { Status } from "@components/Status";
import EmptyCartPagePerson from "@assets/EmptyCartPagePerson.svg";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CheckoutContext } from "@context/CheckoutContext";
import { CheckoutDesktop } from "@partials/Checkout/CheckoutDesktop";
import { CheckoutMobile } from "@/partials/Checkout/CheckoutMobile";

export function Checkout() {
  const { products, setProducts } = useContext(CheckoutContext);
  const navigate = useNavigate();

  const handleFinishedOrder = () => {
    setProducts([]);
    navigate("/success");
  };

  return (
    <S.CheckoutContainer>
      {!products.length ? (
        <Status
          imageUrl={EmptyCartPagePerson}
          text="Parece que não há nada por aqui :("
          onClick={() => navigate("/")}
        />
      ) : (
        <>
          <CheckoutDesktop handleFinishedOrder={handleFinishedOrder} />
          <CheckoutMobile handleFinishedOrder={handleFinishedOrder} />
        </>
      )}
    </S.CheckoutContainer>
  );
}
