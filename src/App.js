import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const [coin, setCoin] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setSelectedCoin(event.target.value);
  };
  const moneyInput = (event) => {
    setCoin(event.target.value);
  };

  return (
    <div>
      <h1>Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option value="0">Choose Coin</option>
            {coins.map((coin) => {
              return (
                <option value={coin.quotes.USD.price} key={coin.id}>
                  {coin.name}({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <div>
            <input
              value={coin}
              onChange={moneyInput}
              type="number"
              placeholder="Fill your money"
            />
          </div>
          <hr />
          {selectedCoin === 0 ? null : (
            <h1>You can buy {coin / selectedCoin}</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
