import { Link } from "react-router-dom";

function ItemList({item, id}) {
    return (
      <div className="item">
        <h4>{item.name}</h4>
        <Link to={`/item/${id}`}>
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${id}.png`} alt=""/>
        </Link>
      </div>
    );
  }
  
  export default ItemList;
  