import "./MainBack.scss";
import MainBackground from "../../assets/MainBackground.jpg";

export default function MainBack() {
  return (
    <section className="main-background">
      <img
        src={MainBackground}
        className="main-background_photo"
        alt="Main Beach"
      />
    </section>
  );
}
