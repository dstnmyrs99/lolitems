import { Link } from "react-router-dom";

function IntoItem({ id, list }) {
  if (Object.keys(list).length) {
    return (
      <div className="item">
        <h4>{list[id].name}</h4>
        <Link to={`/item/${id}`}>
          <img
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
export default IntoItem;
