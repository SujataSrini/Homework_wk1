const triviaQuestion = [
  {
    category: "nature",
    difficulty: 1,
    question: `What continent's macro zamia tree lives for 7,000 years?`,
    correct_ans: "Australia",
    incorrect_ans: ["Asia", "NorthAmerica", "Europe"]
  },
  {
    category: "science",
    difficulty: 0,
    question: `How many hearts do octopuses have?`,
    correct_ans: 3,
    incorrect_ans: [1, 2, 5]
  },
  {
    category: "science",
    difficulty: 1,
    question: `What is the heaviest organ in the human body?`,
    correct_ans: "Liver",
    incorrect_ans: ["Brain", "Heart", "Lungs"]
  }
];
const medium_diff = triviaQuestion.filter(medium => {
  if (medium.difficulty === 1) {
    return (medium.name = "Sujata");
  }
});

console.log(medium_diff);