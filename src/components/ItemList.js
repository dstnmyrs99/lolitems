import { Link } from "react-router-dom";

function ItemList({item, id}) {
    return (
      <div className="item">
        <Link to={`/item/${id}`}>
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${id}.png`} alt=""/>
        </Link>
        <h4>{item.gold.total}</h4>
      </div>
    );
  }
  
  export default ItemList;
  