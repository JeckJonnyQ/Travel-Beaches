import "./ExploreSection.scss";

export default function ExploreSection({ props: { title, location, images } }) {
  return (
    <section className="explore" id="places">
      <h2 className="explore__title" data-aos="fade-down">
        {title}
      </h2>

      <div className="explore__content">
        {images.map(({ id, link, src, name, alt, dataAos }) => (
          <div key={id} className="content__item" data-aos={dataAos}>
            <a href={link} className="content__item_link" target="_blank">
              <img src={src} alt={alt} className="content__item_img" />
            </a>
            <div className="content__item-text">
              <h3 className="content__item-text_name">{name}</h3>
              <p className="content__item-text_location">{location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
