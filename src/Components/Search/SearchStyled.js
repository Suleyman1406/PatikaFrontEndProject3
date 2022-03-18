import styled from "styled-components";
import { FaSearchDollar } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 750px) {
    display: block;
    text-align: center;
  }
`;

export const Header = styled.h2`
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  display: inline-block;
  color: #4b636e;
  @media only screen and (max-width: 750px) {
    display: block;
  }
`;

export const InputContainer = styled.div`
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

export const SearchInput = styled.input`
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

export const SearchIcon = styled(FaSearchDollar)`
  position: absolute;
  right: -25px;
  top: 3px;
  font-size: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 4px;
  transition: 0.2s all;
  color: rgba(0, 0, 0, 0.8);
`;
