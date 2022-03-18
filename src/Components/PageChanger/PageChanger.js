import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCyrptoList } from "../../redux/CyrptoSlice";
import { Container, Button, Count } from "./PageChangerStyled";

const PageChanger = () => {
  const page = useSelector((state) => state.cyrpto.page);
  const dispatch = useDispatch();

  const toPrevious = () => {
    dispatch(getCyrptoList(page - 1));
  };
  const toNext = () => {
    dispatch(getCyrptoList(page + 1));
  };
  return (
    <Container>
      <Button disabled={page === 1} onClick={toPrevious}>
        🡠 Previous Page
      </Button>
      <Count>Page {page}</Count>
      <Button disabled={page === 100} onClick={toNext}>
        Next Page 🡢
      </Button>
    </Container>
  );
};

export default PageChanger;
