import "./AboutSection.scss";
import Button from "../Button/Button";

export default function AboutSection({
  props: { title, description, images },
}) {
  return (
    <section className="about" id="about">
      <div className="about__block">
        <div className="about__block_images">
          {images.map((item) => (
            <div
              key={item.id}
              className={item.className}
              data-aos={item.dataAos}
            >
              <img
                src={item.src}
                className={`${item.className}_photo`}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        <div className="about__block_content">
          <h2 className="content__title" data-aos="fade-left">
            {title}
          </h2>
          <p
            className="content__description"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            {description}
          </p>
          <Button text="Explore Now" />
        </div>
      </div>
    </section>
  );
}
