import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "hsl(0, 0%, 20%)", color: "hsl(0, 0%, 100%)" display: "block", justifyContent: "left" }}>
      <Link to="/" style={{ margin: "0 10px", color: "hsl(0, 0%, 100%)" }}>Home</Link>
      <Link to="/About" style={{ margin: "0 10px", color: "hsl(0, 0%, 100%)" }}>About</Link>
      <Link to="/Services" style={{ margin: "0 10px", color: "hsl(0, 0%, 100%)" }}>Services</Link>
      <Link to="/Contact" style={{ margin: "0 10px", color: "hsl(0, 0%, 100%)" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
