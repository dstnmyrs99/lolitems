import ItemList from "./ItemList";
import Dropdown from "./Dropdown";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

function Shop({
  shopList = {},
  setToFilter,
  toFilter,
  setFilteredList,
  setToSearch,
}) {
  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const handleSearch = (event) => {
    setSearchText(() => {
      return event.target.value;
    });
    setToSearch(() => {
      return event.target.value;
    });
    if (!event.target.value) {
      history.push(`/`);
    } else {
      history.push(`/search/${event.target.value}`);
    }
  };

  const params = useParams();

  setTimeout(() => {
    if (params.filter) {
      setToFilter(params.filter);
    } else {
      setToFilter("All");
    }
  }, 100);

  setTimeout(() => {
    if (params.term) {
      setToSearch(params.term);
      setSearchText(params.term);
    } else {
      setToSearch("");
      setSearchText("");
    }
  }, 100);

  if (Object.keys(shopList).length) {
    return (
      <div className="App">
        <Dropdown toFilter={toFilter} setToFilter={setToFilter} />
        <label htmlFor="search">Search</label>
        <input type="text" spellCheck="false" value={searchText} onChange={handleSearch} />
        <div className="shopContainer">
          {Array(Object.keys(shopList).length)
            .fill()
            .map((ignoredValue, index) => index)
            .map((id, index) => {
              return (
                <ItemList
                  key={index}
                  item={Object.values(shopList)[id]}
                  id={Object.keys(shopList)[id]}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Dropdown toFilter={toFilter} setToFilter={setToFilter} />
        <label htmlFor="search">Search</label>
        <input type="text" value={searchText} onChange={handleSearch} />
        <p>Loading....</p>
      </div>
    );
  }
}

export default Shop;
