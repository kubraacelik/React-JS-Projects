import React, { useEffect } from "react";
import "./questionCard.css";
import { useState } from "react";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    //doğru cevabı buldurur
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct_answer;
    console.log(checkAnswer);
    //cevap doğru ise
    if (checkAnswer) {
      setScore(score + 10);
    }
    setCount(count + 1);
    //sonuncu soruya gelince setModal(true) olsun yani farklı sayfanın render edilmesini sağlayacağız
    if (count == 9) {
      setModal(true);
      setTimer(30)
    }
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      //süreyi 1 1 azaltıyor
      if (timer > 0) {
        setTimer(timer - 1);
      }
      //süre 0 olunca ve soru sayısı hala 10'dan küçükse yeni soruya geç ve süre 30 sn olsun
      if(timer == 0 && count < 10){
        setCount(count + 1)
        setTimer(30)
      }
      else if(count >= 10){
        setModal(true)
      }
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answer?.map((answer, i) => (
        <button onClick={approvedChoice} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
