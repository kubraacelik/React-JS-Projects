import React from "react";
import { useParams } from "react-router-dom";
import "./quiz.css";
import { useEffect } from "react";
import { useState } from "react";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/questionCard";
import Modal from "../../components/modal/modal";

const Quiz = () => {
  //useParams, Route tarafından eşleşen URL'deki parametreleri almanıza izin verir.
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);

  console.log(questionsData, "questionsData");

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Quiz;
