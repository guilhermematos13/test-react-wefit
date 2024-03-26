import { IGetProductsResponse } from "@api/requests/getProducts";
import { createContext, useState } from "react";
import { CheckoutContextProps, TransactionProviderProps } from "./interface";

export const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutContextProvider({
  children,
}: TransactionProviderProps) {
  const [products, setProducts] = useState<IGetProductsResponse[]>([]);

  const addProduct = (newProduct: IGetProductsResponse) => {
    const newProductWithQuantity = {
      ...newProduct,
      quantity: 1,
    };
    const existingProduct = products.find(
      (product) => product.id === newProductWithQuantity.id
    );
    if (existingProduct) {
      return setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === newProductWithQuantity.id
            ? {
                ...product,
                quantity: product.quantity ? product.quantity + 1 : 1,
              }
            : product
        )
      );
    }
    return setProducts((prev) => [...prev, newProductWithQuantity]);
  };

  const updateQuantity = (id: number, amount: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((prev) =>
        prev.id === id
          ? {
              ...prev,
              quantity: Math.max(
                1,
                prev.quantity ? prev.quantity + amount : amount
              ),
            }
          : prev
      )
    );
  };

  const removeProduct = (id: number) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  const getTotalItems = () => {
    return products.reduce((acc, product) => {
      return product.quantity ? acc + product.quantity : acc;
    }, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((acc, product) => {
      return acc + product.price * (product.quantity ?? 1);
    }, 0);
  };

  const getTotalItemsById = (id: number) =>
    products.find((product) => product.id === id)?.quantity ?? 0;

  const getTotalPriceById = (id: number) => {
    const product = products.find((product) => product.id === id);
    return product ? product.price * (product?.quantity ?? 1) : 0;
  };

  return (
    <CheckoutContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        getTotalItemsById,
        getTotalPriceById,
        removeProduct,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
