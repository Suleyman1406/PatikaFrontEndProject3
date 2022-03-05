import React from "react";
import styled from "styled-components";
import { FaSearchDollar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/CyrptoSlice";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 750px) {
    display: block;
    text-align: center;
  }
`;

const Header = styled.h2`
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  display: inline-block;
  color: #4b636e;
  @media only screen and (max-width: 750px) {
    display: block;
  }
`;

const InputContainer = styled.div`
  width: 200px;
  display: inline-block;
  width: fit-content;
  transform: translateY(10px);
  position: relative;
  margin-left: auto;
  margin-right: 40px;
  @media only screen and (max-width: 750px) {
    display: block;
    width: 250px;
    margin-right: auto;
  }
  @media only screen and (max-width: 500px) {
    display: block;
    width: 200px;
    margin-right: auto;
  }
  @media only screen and (max-width: 400px) {
    display: block;
    width: 150px;
    margin-right: auto;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  display: inline-block;
  padding: 10px 15px;
  border: none;
  border-radius: 18px;
  font-size: 15px;
  outline: none;
  transition: 0.2s all;
  box-shadow: rgba(255, 255, 255, 0.6) 0px 4px 12px;
  &:hover {
    box-shadow: rgba(220, 220, 220, 0.8) 0px 4px 12px;
  }
  &:focus {
    box-shadow: rgba(120, 120, 120, 0.8) 0px 4px 12px;
  }
`;

const SearchIcon = styled(FaSearchDollar)`
  position: absolute;
  right: -25px;
  top: 3px;
  font-size: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 4px;
  transition: 0.2s all;
  color: rgba(0, 0, 0, 0.8);
  &:hover {
    color: rgba(0, 0, 0, 1);
    background-color: rgba(220, 220, 220);
    cursor: pointer;
  }
`;

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
