import { useEffect, useState } from "react";
// 7.3부터 하기

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []); // 한 번만 작동

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
          <select>
            {coins.map((coin) => (
            <option>
              {coin.name} $({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
            ))}
          </select>
      )}
        
    </div>
  );
}

export default App;
