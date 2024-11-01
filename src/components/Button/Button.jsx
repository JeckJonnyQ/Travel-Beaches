import "./Button.scss";

export default function Button({ text, className = "", onClick = () => {} }) {
  return (
    <button
      type="button"
      className={`${className} button button-shadow`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
