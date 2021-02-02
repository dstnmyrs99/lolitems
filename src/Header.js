import { useHistory, Link } from "react-router-dom";

function Header() {
    const history = useHistory();
    return (
      <div className="header">
        <button onClick={() => history.goBack()}>Back</button>
        <Link to='/'><button>Home</button></Link>
      </div>
    );
  }
  
  export default Header;
  