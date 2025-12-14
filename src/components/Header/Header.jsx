import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Angela Bello" />
      </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
