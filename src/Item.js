import { useParams } from "react-router-dom";
import IntoItem from "./IntoItem";
import FromItem from "./FromItem";

function Item({ list }) {
  const params = useParams();
  const { id } = params;
  console.log(list[id]);
  if (Object.keys(list).length) {
    return (
      <div className="App">
        <div>
          {list[id].from && (
            <div>
              <p>Items required</p>
              <div className="from">
                {list[id].from.map((item) => (
                  <FromItem key={item} list={list} id={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        <h4>{list[id].name}</h4>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${id}.png`}
          alt=""
        />
        <h5 dangerouslySetInnerHTML={{ __html: list[id].description }}></h5>
        <p>{list[id].plaintext}</p>
        <p>Cost : {list[id].gold.base} Gold</p>
        <p>Total : {list[id].gold.total} Gold</p>

        {list[id].into && (
          <div>
            <h4>Builds Into</h4>
            <div className="shopContainer">
              {list[id].into.map((item) => (
                <IntoItem key={item} list={list} id={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
export default Item;
