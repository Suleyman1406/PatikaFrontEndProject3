import React from "react";
import {
  sortByRank,
  sortByName,
  sortByMarketCap,
  sortByPrice,
  sortByPriceChange,
} from "./Sort";
import { Tr, THead } from "./CryptoTableStyled";
import Styles from "./CryptoTable.module.css";

const CryptoTableHead = ({ list, setList }) => {
  return (
    <thead>
      <Tr className={Styles.table_head}>
        <THead isRank={true} onClick={sortByRank.bind(null, list, setList)}>
          Rank
        </THead>
        <THead
          style={{ textAlign: "left" }}
          onClick={sortByName.bind(null, list, setList)}
        >
          Coin Name
        </THead>
        <THead onClick={sortByPrice.bind(null, list, setList)}>Price</THead>
        <THead
          isChange={true}
          onClick={sortByPriceChange.bind(null, list, setList)}
        >
          Price Change
        </THead>
        <THead isCap={true} onClick={sortByMarketCap.bind(null, list, setList)}>
          Market Cap
        </THead>
      </Tr>
    </thead>
  );
};

export default CryptoTableHead;
