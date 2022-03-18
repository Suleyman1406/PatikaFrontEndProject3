import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding: 15px 10px;
  }
`;
export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  margin: 0 20px;
  font-weight: 700;
  color: white;
  background-color: #78909c;
  font-size: 15px;
  box-shadow: rgba(75, 99, 110, 0.64) 0px 3px 8px;
  transition: 0.2s all;
  &:hover {
    box-shadow: rgba(75, 99, 110, 1) 0px 3px 8px;
    transform: translateY(-3px);
  }
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  @media only screen and (max-width: 500px) {
    padding: 10px 10px;
    margin: 0 5px;
    font-size: 13px;
  }
  @media only screen and (max-width: 400px) {
    padding: 7px 7px;
    font-size: 12px;
  }
`;

export const Count = styled.h3`
  cursor: default;
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
