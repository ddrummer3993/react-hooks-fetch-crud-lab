import React from "react";

function QuestionItem({ onQuestionDelete, onCorrectIndexChange, question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onDeleteClick() {
   fetch(`http://localhost:4000/questions/${id}`, {
     method: "DELETE",
   })
    .then((resp) => resp.json())
    .then(() => onQuestionDelete(question))
  }

  function onCorrectIndexClick(index) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: index,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedQuestion) => onCorrectIndexChange(updatedQuestion));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
          defaultValue={correctIndex} 
          onChange={(event) => onCorrectIndexClick(event.target.value)}
        >{options}</select>
      </label>
      <button onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
