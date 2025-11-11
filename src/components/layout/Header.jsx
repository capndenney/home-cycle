import Nav from "./Nav";
import logo from "../../assets/home-cycle-logo-test.PNG"

const Header = () => {

  //TODO: Need Logo Icon

  return (
    <header className="header">
      <img id="logo" src={logo} alt="Home Cycle Logo" />
      <h1 className="app-title">Home Cycle</h1>
      <Nav />
    </header>
  );
};

export default Header;
