import { useHistory, useRouteMatch } from "react-router-dom";

function Header({ toSearch }) {
 
  const history = useHistory();
  const { url } = useRouteMatch();
  const handleBack = ()=>{
    
    console.log(url);
    history.go(-(toSearch.length ? toSearch.length : 1));
  }
  return (
    <div className="header">
      <button
        onClick={handleBack}
      >
        Back
      </button>

      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
}

export default Header;
