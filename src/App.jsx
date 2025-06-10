import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  function toggleQuestion(id) {
    // setActiveId(activeId === id ? null : id);
    setActiveId((currActiveId) => (currActiveId === id ? null : id));
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        onHandleToggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
