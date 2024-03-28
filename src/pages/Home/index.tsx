import * as S from "./styles";
import { Card } from "@components/Card";
import { useContext, useEffect, useState } from "react";
import { IGetProductsResponse, getProducts } from "@api/requests/getProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "@components/Loading";
import { CheckoutContext } from "@/context/CheckoutContext";
import { Search } from "@/components/Search";

export function Home() {
  const navigate = useNavigate();
  const { addProduct, getTotalItemsById } = useContext(CheckoutContext);
  const [isLoading, setIsLoading] = useState<"initial" | "filter" | false>(
    "initial"
  );
  const [productsList, setProductsList] = useState<IGetProductsResponse[]>([]);
  const [searchParams] = useSearchParams();

  const RenderList = () => (
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
  );

  useEffect(() => {
    const getProductsList = async () => {
      setIsLoading(searchParams.get("search-query") ? "filter" : "initial");
      try {
        const response = await getProducts();
        setProductsList(
          response.filter((product) => {
            return product.title
              .toLowerCase()
              .includes((searchParams.get("search-query") ?? "").toLowerCase());
          })
        );
      } catch (error) {
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };

    getProductsList();
  }, [navigate, searchParams]);

  return (
    <S.HomeContainer>
      {isLoading === "initial" ? (
        <Loading spacing="lg" />
      ) : (
        <>
          <Search />
          {isLoading === "filter" ? <Loading spacing="sm" /> : <RenderList />}
        </>
      )}
    </S.HomeContainer>
  );
}
