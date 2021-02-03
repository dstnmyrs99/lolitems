import ItemList from "./ItemList";
import Dropdown from "./Dropdown";
import { useParams } from "react-router-dom";

function Shop({ shopList = {},setToFilter, toFilter }) {
  
  const params = useParams();
  setTimeout(()=>{
    if(params.filter){
    setToFilter(params.filter)
    }else{
      setToFilter('All');
    }
  }, 100)
  if (Object.keys(shopList).length) {
    return (
      <div className="App">
        <Dropdown toFilter={toFilter} setToFilter={setToFilter}/>
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
    return <p>Loading....</p>;
  }
}

export default Shop;
