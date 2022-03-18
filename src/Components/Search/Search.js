import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/CyrptoSlice";
import { useSelector } from "react-redux";
import {
  Container,
  Header,
  InputContainer,
  SearchInput,
  SearchIcon,
} from "./SearchStyled";
const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.cyrpto.search);
  const changeSearch = (value) => {
    dispatch(setSearch(value));
  };
  return (
    <Container className="clearfix">
      <Header>Cyrpto Tracker Application</Header>
      <InputContainer>
        <SearchInput
          onChange={(e) => changeSearch(e.target.value)}
          value={search}
          placeholder="Search by cyrpto name"
        />
        <SearchIcon />
      </InputContainer>
    </Container>
  );
};

export default Search;
