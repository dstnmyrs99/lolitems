import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Shop from "./Shop";
import Item from "./Item";
import Header from './Header';

function App() {
  const [shopList, setShopList] = useState({});

  useEffect(() => {
    const getItems = async () => {
      const items = await (
        await fetch(
          `http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/item.json`
        )
      ).json();
      setShopList(items.data);
    };
    getItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Shop shopList={shopList} />
          </Route>
          <Route path="/item/:id">
            <Item list={shopList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
