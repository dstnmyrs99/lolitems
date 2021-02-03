import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      
        <button onClick={()=> history.push('/')}>Home</button>
 
    </div>
  );
}

export default Header;
