import "./AboutSection.scss";
import Button from "../Button/Button";

export default function AboutSection({
  props: { title, description, images },
}) {
  return (
    <section className="about">
      <div className="about__block">
        <div className="about__block_images">
          {images.map((item) => (
            <div key={item.id} className={item.className}>
              <img
                src={item.src}
                className={`${item.className}_photo`}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        <div className="about__block_content">
          <h2 className="content__title">{title}</h2>
          <p className="content__description">{description}</p>
          <Button text={"Explore Now"} />
        </div>
      </div>
    </section>
  );
}
