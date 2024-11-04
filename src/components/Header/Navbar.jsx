import "./Navbar.scss";
import { navbarLinks } from "../../helpers/staticNavbar.js";

export default function Navbar() {
  return (
    <nav className="navbar">
      {navbarLinks.slice(0, 1).map((link) => (
        <a key={link.id} href={link.href} className="navbar__logo">
          {link.name}
        </a>
      ))}

      <ul className="navbar__list">
        {navbarLinks.slice(1).map((link) => (
          <li key={link.id} className="navbar__list_item">
            <a className="navbar__list_item-link" href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
