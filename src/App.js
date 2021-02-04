import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Shop from "./Shop";
import Item from "./Item";
import Header from "./Header";

function App() {
  const [shopList, setShopList] = useState({});
  const [filteredList, setFilteredList] = useState({});
  const [toFilter, setToFilter] = useState({});
  const [searchedList, setSearchedList] = useState({});
  const [toSearch, setToSearch] = useState("");

  useEffect(() => {
    const filterList = (tag) => {
      setFilteredList(() => {
        let filtering = {};
        const list = Object.keys(shopList).filter((item) =>
          shopList[item].tags.includes(tag)
        );
        list.map((item) => {
          return (filtering[item] = shopList[item]);
        });
        return filtering;
      });
    };
    filterList(toFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toFilter]);

  useEffect(() => {
    const searchList = (tag) => {
      setSearchedList(() => {
        let filtering = {};
        const list = Object.keys(shopList).filter((item) =>
          shopList[item].name.toLowerCase().includes(tag)
        );
        list.map((item) => {
          return (filtering[item] = shopList[item]);
        });
        return filtering;
      });
    };
    searchList(toSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toSearch]);

  useEffect(() => {
    const getItems = async () => {
      const items = await (
        await fetch(
          `https://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/item.json`
        )
      ).json();
      setShopList(() => items.data);
    };
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Router>
        <Header toSearch={toSearch}/>
        <Switch>
          <Route path="/" exact={true}>
            <Shop
              shopList={shopList}
              setToFilter={setToFilter}
              toFilter={toFilter}
              setFilteredList={setFilteredList}
              setToSearch={setToSearch}
            />
          </Route>
          <Route path="/:filter" exact={true}>
            <Shop
              shopList={filteredList}
              setToFilter={setToFilter}
              toFilter={toFilter}
              setFilteredList={setFilteredList}
              setToSearch={setToSearch}
            />
          </Route>
          <Route path="/item/:id">
            <Item list={shopList} setToSearch={setToSearch}/>
          </Route>
          <Route path="/search/:term">
            <Shop
              shopList={searchedList}
              setToFilter={setToFilter}
              toFilter={toFilter}
              setFilteredList={setFilteredList}
              setToSearch={setToSearch}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
