import "./AboutSection.scss";

import ImageOne from "../../assets/images/about-image-1.jpg";
import ImageTwo from "../../assets/images/about-image-2.jpg";

import Button from "../Button/Button";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about__block">
        <div className="about__block_images">
          <div className="image__item-one">
            <img
              src={ImageOne}
              className="image__item-one_photo"
              alt="Pier Photo"
            />
          </div>
          <div className="image__item-two">
            <img
              src={ImageTwo}
              className="image__item-two_photo"
              alt="Beach Photo"
            />
          </div>
        </div>

        <div className="about__block_content">
          <h2 className="content__title">
            More information about the best beaches
          </h2>
          <p className="content__description">
            Our beaches offer a wide range of activities to enhance your
            experience. From beach volleyball and surfing to sunbathing and
            picnicking, there’s something for everyone. Many beaches also
            provide facilities such as showers, rental equipment, and beachside
            cafes.
          </p>

          <Button text={"Explore Now"} />
        </div>
      </div>
    </section>
  );
}
