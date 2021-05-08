import { Link } from "react-router-dom";

function FromItem({ id, list }) {
  if (Object.keys(list).length) {
    return (
      <div className="fromItem">
        <Link to={`/item/${id}`}>
          <img
          title={list[id].name}
            src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${id}.png`}
            alt=""
          />
        </Link>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
export default FromItem;