import React, { useState } from "react";
import "./introduce.css";
import logo from "./logo.png";
import Dropdown from "../../components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficultyOptions = ["easy", "medium", "hard"];

  //options'ta seçtiği seçenekler
  const [difficultyChange, setDifficultyChange] = useState("");

  //yönlendirme işlemi
  const navigate = useNavigate();

  //toplam soru sayısı
  const TOTAL_QUESTIONS = 10;

  const startQuiz = ()=>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={logo} alt="" />
        <Dropdown
          data={difficultyOptions}
          setDifficultyChange={setDifficultyChange}
        />
        <button className="introduce-btn" onClick={startQuiz}>BAŞLA</button>
      </div>
    </div>
  );
};

export default Introduce;
