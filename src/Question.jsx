import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Question({
  id,
  title,
  info,
  onHandleToggleQuestion,
  activeId,
}) {
  const isActive = activeId === id;
  return (
    <li>
      <article className="question">
        <header>
          <h5>{title}</h5>
          <button
            onClick={() => onHandleToggleQuestion(id)}
            type="button"
            className="question-btn"
          >
            {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {isActive && <p>{info}</p>}
      </article>
    </li>
  );
}
