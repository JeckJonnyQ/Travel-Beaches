import "./Navbar.scss";
import { Link } from "react-scroll";

export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      {links.slice(0, 1).map((link) => (
        <a key={link.id} href={link.href} className="navbar__logo">
          {link.name}
        </a>
      ))}

      <ul className="navbar__list">
        {links.slice(1).map((link) => (
          <li key={link.id} className="navbar__list_item">
            <Link
              className="navbar__list_item-link"
              to={link.path}
              spy={true}
              smooth={true}
              duration={500}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
