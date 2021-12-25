const API_KEY =
  '8fdc8302a550265a68a71c50274f64aab3f90d803414cd34231932a5ce154511';

// export const loadTickers = (tickers) =>
//  fetch(
//   `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
//    ','
//   )}&tsyms=USD&api_key=${API_KEY}`
//  )
//   .then((r) => r.json())
//   .then((rawData) =>
//    Object.fromEntries(
//     Object.entries(rawData).map(([key, value]) => [key, value.USD])
//    )
//   )
export const loadTicker = (ticker) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${ticker}&tsyms=USD&api_key=${API_KEY}`
  ).then((r) => r.json());
