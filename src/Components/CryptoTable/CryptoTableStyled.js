import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: white;
  height: 600px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 3px 5px;
  overflow: auto;
  font-family: "Poppins", sans-serif;
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #78909c;
    border-radius: 100px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  padding: 0 10px;
`;

export const Tr = styled.tr`
  border: none;
  transition: 0.7s background-color;
  &:hover {
    background-color: rgba(220, 220, 220);
    cursor: pointer;
  }
`;

export const THead = styled.th`
  border: none;
  padding: 15px 5px;
  font-weight: 700;
  transition: 0.5s all;
  &:hover {
    background-color: rgba(75, 99, 110, 0.4);
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    display: ${({ isCap }) => (isCap ? "none" : "")};
  }
  @media only screen and (max-width: 500px) {
    display: ${({ isChange }) => (isChange ? "none" : "")};
    padding: 10px 5px;
  }

  @media only screen and (max-width: 400px) {
    padding: 8px 3px;
    font-size: 14px;
  }
  @media only screen and (max-width: 350px) {
    display: ${({ isRank }) => (isRank ? "none" : "")};
  }
`;

export const TData = styled.td`
  text-align: center;
  padding: 15px 5px;
  margin: 0 10px;
  font-weight: 500;
  transition: 0.5s all;
  @media only screen and (max-width: 800px) {
    display: ${({ isCap }) => (isCap ? "none" : "")};
  }
  @media only screen and (max-width: 500px) {
    display: ${({ isChange }) => (isChange ? "none" : "")};
  }
  @media only screen and (max-width: 350px) {
    display: ${({ isRank }) => (isRank ? "none" : "")};
    font-size: 13px;
  }
`;
export const CyrptoImage = styled.img`
  width: 30px;
  display: inline-block;
  transform: translateY(9px);
  transition: 0.5s all;
  @media only screen and (max-width: 400px) {
    width: 20px;
    transform: translateY(5px);
  }
`;
