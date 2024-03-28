import { useState } from "react";
import * as S from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "@assets/icons/SearchIcon";

export function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search-query") ?? "");

  const onSaveQuery = () => {
    navigate(`/search?search-query=${query}`);
  };

  return (
    <S.InputContainer>
      <S.Input
        placeholder="Buscar filme pelo nome"
        aria-label="inputSearch"
        value={query}
        onBlur={onSaveQuery}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <S.SearchButton onClick={onSaveQuery} disabled={query.length === 0}>
        <SearchIcon color={query ? "#000000" : "#CCCCCC"} />
      </S.SearchButton>
    </S.InputContainer>
  );
}
