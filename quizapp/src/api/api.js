export const fetchQuizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data= await (await fetch(url)).json();
  return data.results;
};
