export const sortByName = (list, setList) => {
  if (list[0].name > list[1].name) setList([...list].sort(compareName));
  else setList([...list].sort(compareName).reverse());
};

export const sortByPrice = (list, setList) => {
  if (list[0].current_price > list[1].current_price)
    setList([...list].sort(comparePrice));
  else setList([...list].sort(comparePrice).reverse());
};
export const sortByPriceChange = (list, setList) => {
  if (list[0].price_change_percentage_24h > list[1].price_change_percentage_24h)
    setList([...list].sort(comparePriceChange));
  else setList([...list].sort(comparePriceChange).reverse());
};
export const sortByMarketCap = (list, setList) => {
  if (list[0].market_cap > list[1].market_cap)
    setList([...list].sort(compareMarketCap));
  else setList([...list].sort(compareMarketCap).reverse());
};

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

export const sortByRank = (list, setList) => {
  if (list[0].market_cap_rank > list[1].market_cap_rank)
    setList([...list].sort(compareRank));
  else setList([...list].sort(compareRank).reverse());
};
