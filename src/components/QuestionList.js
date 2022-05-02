import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onRenderQuestions, onQuestionDelete, onCorrectIndexChange, questions }) {

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((resp) => resp.json())
      .then((questionData) => {
        //console.log(questionData)
        onRenderQuestions(questionData)
      })
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem 
          key={question.id} 
          question={question} 
          onQuestionDelete={onQuestionDelete}
          onCorrectIndexChange={onCorrectIndexChange}
        />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
