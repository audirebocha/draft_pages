import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

    function nav(url) {
        navigate(url); 
      }

  return (
    <div className="navbar">
      <div className="navContainer">
       

        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" onClick={e=>{nav('enlisting_form')}}>List your property</button>
            <button className="navButton" onClick={(e)=>{nav('/login')}}>Login</button>
            <button className="navButton" onClick={(e)=>{nav('/register')}}>Create Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
