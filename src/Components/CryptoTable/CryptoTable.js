import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCyrptoList } from "../../redux/CyrptoSlice";
import { Container, Table } from "./CryptoTableStyled";
import CryptoTableHead from "./CryptoTableHead";
import CryptoTableBody from "./CryptoTableBody";

const CyrptoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCyrptoList(1));
  }, []);
  const cyrptoList = useSelector((state) => state.cyrpto.cryptoList);
  const search = useSelector((state) => state.cyrpto.search);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...cyrptoList]);
  }, [cyrptoList]);

  useEffect(() => {
    if (search)
      setList(
        cyrptoList.filter(
          (item) =>
            item.name.toUpperCase().includes(search.toUpperCase()) ||
            item.symbol.toUpperCase().includes(search.toUpperCase())
        )
      );
    else setList([...cyrptoList]);
  }, [search]);

  return (
    <Container>
      <Table>
        <CryptoTableHead list={list} setList={setList} />
        <CryptoTableBody list={list} />
      </Table>
    </Container>
  );
};

export default CyrptoList;
