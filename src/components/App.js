import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  
  function handleRenderQuestions(data) {
    //console.log(data);
    setQuestions(data);
  };

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleQuestionDelete(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
    //console.log(updatedQuestions);
  }

  function handleCorrectIndexChange (changedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === changedQuestion.id) {
        return changedQuestion
      } else {
        return question;
      }
    })
    setQuestions(updatedQuestions);
  }

  //console.log(questions);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm
        onAddQuestion={handleAddQuestion} 
      /> : <QuestionList 
        onRenderQuestions={handleRenderQuestions}
        onQuestionDelete={handleQuestionDelete}
        onCorrectIndexChange={handleCorrectIndexChange}
        questions={questions}
      />}
    </main>
  );
}

export default App;
