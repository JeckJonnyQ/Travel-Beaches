import "./Footer.scss";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__content" data-aos="zoom-in">
        <h2 className="footer__content_title">
          Traveling and Enjoy To Explore
        </h2>
        <p className="footer__content_description">
          We have many beach to explore and promo special for you
        </p>
        <Button text="Join Newsletter" />
      </div>

      <div className="footer__copy">
        <h3 className="footer__copy_text">&#169;2022 Travel · By Rauliqbal</h3>
      </div>
    </footer>
  );
}
