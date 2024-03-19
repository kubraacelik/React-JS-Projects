const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((dt) => ({
    ...dt,
    //doğru cevabın hep aynı şıkta olmaması için yazdık
    answer: shuffleArray([...dt.incorrect_answers, dt.correct_answer]),
  }));
};
