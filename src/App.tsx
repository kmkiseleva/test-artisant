import React, { useEffect, useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "./store/fetchCards";
import { RootState } from "./store";

export const baseURL = "https://artisant.io/api/products";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cards);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const filterCards = () => {
    setAvailable(!available);
  };

  return (
    <div className="container">
      <h1>Explore</h1>
      <p className="subtitle">Buy and sell digital fashion NFT art</p>
      <div>
        <button className={available ? "available" : ""} onClick={filterCards}>
          Filter available
        </button>
      </div>
      <div className="cards">
        {available
          ? items
              .filter((item) => item.quantity_available > 0)
              .map((item) => <Card key={item.product_id} item={item} />)
          : items.map((item) => <Card key={item.product_id} item={item} />)}
      </div>
    </div>
  );
};

export default App;

// import axios from "axios";

// const [products, setProducts] = useState([]);

// const fetchProducts = async () => {
//   await axios.get("https://artisant.io/api/products").then((response) => {
//     const { products } = response.data.data;
//     setProducts(products);
//   });
// };

// useEffect(() => {
//   fetchProducts();
// }, []);
