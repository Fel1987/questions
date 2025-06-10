import Question from "./Question";

export default function Questions({ questions }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <Question key={question.id} />
        ))}
      </ul>
    </section>
  );
}
