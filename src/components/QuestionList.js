import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(questionData => setData(questionData))
  }, [])

  function handleDeletedItem(deletedItem) {
    const leftovers = data.filter(item => {
      if (item.id !== deletedItem) {
        return item
      }
    })
    setData(leftovers)
  }

  const dataElements = data.map(item => {
    return <QuestionItem key={item.id} question={item} handleDeletedItem={handleDeletedItem}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{dataElements}</ul>
    </section>
  );
}

export default QuestionList;
