import "./ScrollToTop.scss";
import { Link } from "react-scroll";
import ScrollArrow from "../../assets/icons/ScrollArrow.png";

export default function ScrollToTop() {
  return (
    <Link
      className="scroll-to-top"
      to="home"
      spy={true}
      smooth={true}
      duration={500}
    >
      <img src={ScrollArrow} className="scroll-to-top__img" alt="ArrowIcon" />
    </Link>
  );
}
