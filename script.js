function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const codingAdvicePackage = {
  codingLanguage: ["Javascript", "Typescript", "Python", "Swift", "Java"],
  codingLevel: [
    "professional",
    "beginner",
    "intermediate",
    "leader",
    "human with super power",
  ],
  codingAdvice: [
    "sleep",
    "eat, learn and repeat",
    "ask questions",
    "study at WBS Coding School",
  ],
};

let personalAdvice = [];

for (let prop in personalAdvice) {
  let optionIdx = generateRandomNumber(personalAdvice[prop].length);

  switch (prop) {
    case "codingLanguage":
      personalAdvice.push(
        `Your coding language of the day is "${codingAdvicePackage[prop][optionIdx]}".`
      );
      break;
    case "codingLevel":
      personalAdvice.push(
        `This is your chance to become a "${codingAdvicePackage[prop][optionIdx]}".`
      );
      break;
    case "codingAdvice":
      personalAdvice.push(
        `You only have to "${codingAdvicePackage[prop][optionIdx]}".`
      );
      break;
    default:
      personalAdvice.push(
        "OMG - There is not enough info. You should better become an Excel-Expert!"
      );
  }
}
