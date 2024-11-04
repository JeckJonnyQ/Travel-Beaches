import "./HomeSection.scss";
import Button from "../Button/Button";
import staticHomeLinks from "../../helpers/staticHomeLinks.js";
import MainBackground from "../../assets/MainBackground.jpg";

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-background">
        <img
          src={MainBackground}
          className="home-background_photo"
          alt="Main Beach"
        />
      </div>

      <h2 className="home__subtitle">Discover your place</h2>
      <h1 className="home__title">
        Explore The Best <strong>Beautiful Beaches</strong>
      </h1>

      <Button text="Explore" />

      <ul className="home__list">
        {staticHomeLinks.map((link) => (
          <li key={link.id} className="home__list_item">
            <a href={link.href} className="home__list_item-link">
              <img src={link.src} alt={link.alt} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
