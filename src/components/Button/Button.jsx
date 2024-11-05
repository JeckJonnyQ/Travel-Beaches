import "./Button.scss";

export default function Button({ text, className = "", onClick = () => {} }) {
  return (
    <button
      type="button"
      className={`${className} button button-shadow`}
      data-aos="zoom-in"
      data-aos-delay="200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
