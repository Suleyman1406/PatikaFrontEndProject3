import React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import Styles from "./CryptoTable.module.css";
import { Tr, TData, CyrptoImage } from "./CryptoTableStyled";

const CryptoTableBody = ({ list }) => {
  return (
    <tbody>
      {list.map((item, i) => (
        <Tr key={i}>
          <TData isRank={true} className={Styles.market_cap_rank}>
            {item.market_cap_rank}
          </TData>
          <TData className={Styles.image}>
            <CyrptoImage src={item.image} />
            {"  " + item.name}
          </TData>
          <TData className={Styles.price}>{"$" + item.current_price}</TData>
          <TData
            isChange={true}
            className={
              item.price_change_percentage_24h > 0
                ? Styles.price_change_up
                : Styles.price_change_down
            }
          >
            {getRounded(item) + "%"}
            {item.price_change_percentage_24h > 0 ? (
              <HiTrendingUp className={Styles.icon} />
            ) : (
              <HiTrendingDown className={Styles.icon} />
            )}
          </TData>
          <TData isCap={true} className={Styles.market_cap}>
            {"$" + item.market_cap}
          </TData>
        </Tr>
      ))}
    </tbody>
  );
};

const getRounded = (item) =>
  (Math.round(item.price_change_percentage_24h * 10000) / 10000).toFixed(4);

export default CryptoTableBody;
