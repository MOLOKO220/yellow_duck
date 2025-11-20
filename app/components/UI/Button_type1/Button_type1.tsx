import "./Button_type1.scss";

interface Button_type1Props {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Button_type1({
  text,
  active = false,
  onClick,
}: Button_type1Props) {
  return (
    <button
      className={`Button_type1 ${active ? "Button_type1__active" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
