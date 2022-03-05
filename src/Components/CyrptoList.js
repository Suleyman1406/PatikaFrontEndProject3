import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCyrptoList } from "../redux/CyrptoSlice";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { css } from "styled-components";
import { useState } from "react";
const Container = styled.div`
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

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  padding: 0 10px;
`;

const Tr = styled.tr`
  border: none;
`;

const THead = styled.th`
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
  @media only screen and (max-width: 350px) {
    display: ${({ isRank }) => (isRank ? "none" : "")};
  }
  @media only screen and (max-width: 400px) {
    padding: 8px 3px;
    font-size: 14px;
  }
`;

const TData = styled.td`
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
  @media only screen and (max-width: 400px) {
    display: ${({ isRank }) => (isRank ? "none" : "")};
    font-size: 13px;
  }
`;

const CyrptoImage = styled.img`
  width: 30px;
  display: inline-block;
  transform: translateY(9px);
  transition: 0.5s all;
  @media only screen and (max-width: 400px) {
    width: 20px;
    transform: translateY(5px);
  }
`;

const Icon = css`
  font-size: 20px;
  transform: translateY(4px);
`;

const DownIcon = styled(HiTrendingDown)`
  ${Icon}
`;
const UpIcon = styled(HiTrendingUp)`
  ${Icon}
`;

function compareName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
function compareRank(a, b) {
  if (a.market_cap_rank < b.market_cap_rank) return -1;
  if (a.market_cap_rank > b.market_cap_rank) return 1;
  return 0;
}
function comparePrice(a, b) {
  if (a.current_price < b.current_price) return -1;
  if (a.current_price > b.current_price) return 1;
  return 0;
}
function comparePriceChange(a, b) {
  if (a.price_change_percentage_24h < b.price_change_percentage_24h) return -1;
  if (a.price_change_percentage_24h > b.price_change_percentage_24h) return 1;
  return 0;
}
function compareMarketCap(a, b) {
  if (a.market_cap < b.market_cap) return -1;
  if (a.market_cap > b.market_cap) return 1;
  return 0;
}

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

  const sortByRank = () => {
    if (list[0].market_cap_rank > list[1].market_cap_rank)
      setList([...list].sort(compareRank));
    else setList([...list].sort(compareRank).reverse());
  };

  const sortByName = () => {
    if (list[0].name > list[1].name) setList([...list].sort(compareName));
    else setList([...list].sort(compareName).reverse());
  };

  const sortByPrice = () => {
    if (list[0].current_price > list[1].current_price)
      setList([...list].sort(comparePrice));
    else setList([...list].sort(comparePrice).reverse());
  };
  const sortByPriceChange = () => {
    if (
      list[0].price_change_percentage_24h > list[1].price_change_percentage_24h
    )
      setList([...list].sort(comparePriceChange));
    else setList([...list].sort(comparePriceChange).reverse());
  };
  const sortByMarketCap = () => {
    if (list[0].market_cap > list[1].market_cap)
      setList([...list].sort(compareMarketCap));
    else setList([...list].sort(compareMarketCap).reverse());
  };

  return (
    <Container>
      <Table>
        <thead>
          <Tr
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: 1000,
            }}
          >
            <THead isRank={true} onClick={sortByRank}>
              Rank
            </THead>
            <THead style={{ textAlign: "left" }} onClick={sortByName}>
              Coin Name
            </THead>
            <THead onClick={sortByPrice}>Price</THead>
            <THead isChange={true} onClick={sortByPriceChange}>
              Price Change
            </THead>
            <THead isCap={true} onClick={sortByMarketCap}>
              Market Cap
            </THead>
          </Tr>
        </thead>
        <tbody style={{ border: "none" }}>
          {list.map((item, i) => (
            <Tr key={i}>
              <TData isRank={true} style={{ width: "10%", fontWeight: "800" }}>
                {item.market_cap_rank}
              </TData>
              <TData
                style={{
                  width: "15%",
                  textAlign: "left",
                  transform: "translateY(-7px)",
                }}
              >
                <CyrptoImage src={item.image} />
                {"  " + item.name}
              </TData>
              <TData style={{ width: "25%", color: "rgba(255,204,0)" }}>
                {"$" + item.current_price}
              </TData>
              <TData
                isChange={true}
                style={{
                  width: "25%",
                  color:
                    item.price_change_percentage_24h > 0
                      ? "#4BB543"
                      : "rgba(255,51,51)",
                }}
              >
                {(
                  Math.round(item.price_change_percentage_24h * 10000) / 10000
                ).toFixed(4) + "%"}
                {item.price_change_percentage_24h > 0 ? (
                  <UpIcon />
                ) : (
                  <DownIcon />
                )}
              </TData>
              <TData
                isCap={true}
                style={{ width: "25%", color: "rgba(190,190,190)" }}
              >
                {"$" + item.market_cap}
              </TData>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CyrptoList;
