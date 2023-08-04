import { Link } from "react-router-dom";
import logo from "../assets/img/starwars_logo_yellowBlack.png";

function Navbar() {
  return (
    <nav>
      <div className="navbarTop">
        <button className="logoButton">
          <Link to={"/"}>
            <img src={logo} className="logo" alt="StarWars logo" />
          </Link>
        </button>
        <div className="logInSignUp">
          <button>
            <Link to={"/login"}>LOG IN</Link>
          </button>
          <p className="divider">//</p>
          <button>
            <Link to={"/signup"}>SIGN UP</Link>
          </button>
        </div>
      </div>

      <div className="navbarMenu">
        <button className="navbarHome">
          <Link className="home-text" to={"/"}>
            HOME
          </Link>
        </button>
        <button className="navbarStarships">
          <Link className="starships-text" to={"/starships"}>
            STARSHIPS
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
