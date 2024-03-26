import * as S from "./styles";
import { Card } from "@components/Card";
import SearchIcon from "@assets/SearchIcon.svg";
import { useEffect, useState } from "react";
import { IGetProductsResponse, getProducts } from "@/api/requests/getProducts";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
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
            onClick={() => {}}
            image={product.image}
            value={product.price}
            title={product.title}
            quantity={product.quantity ?? 1}
          />
        ))}
      </S.GridContainer>
    </S.HomeContainer>
  );
}
