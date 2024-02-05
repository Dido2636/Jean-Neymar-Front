import { Link } from "react-router-dom";


function Navbar() {

 
  return (
    <>
    <aside className="sideBar">
      <Link to="/">
        <button>Acceuil</button>
      </Link>

      <Link to="/about">
        <button>A propos</button>
      </Link>

      <Link to="/books">
        <button>Oeuvres</button>
      </Link>
    </aside>
   
    </>
  );
}

export default Navbar;