import * as S from "./styles";
import { Card } from "@components/Card";
import SearchIcon from "@assets/SearchIcon.svg";
import { useContext, useEffect, useState } from "react";
import { IGetProductsResponse, getProducts } from "@api/requests/getProducts";
import { useNavigate } from "react-router-dom";
import { Loading } from "@components/Loading";
import { CheckoutContext } from "@/context/CheckoutContext";

export function Home() {
  const navigate = useNavigate();
  const { addProduct, getTotalItemsById } = useContext(CheckoutContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState<IGetProductsResponse[]>([]);

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await getProducts();
        setProductsList(response);
      } catch (error) {
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };

    getProductsList();
  }, [navigate]);

  return (
    <S.HomeContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.InputContainer>
            <S.Input placeholder="Buscar filme pelo nome" />
            <S.SearchButton>
              <img src={SearchIcon} />
            </S.SearchButton>
          </S.InputContainer>
          <S.GridContainer>
            {productsList.map((product) => (
              <Card
                key={product.id}
                onClick={() => addProduct(product)}
                image={product.image}
                value={product.price}
                title={product.title}
                quantity={getTotalItemsById(product.id)}
              />
            ))}
          </S.GridContainer>
        </>
      )}
    </S.HomeContainer>
  );
}
