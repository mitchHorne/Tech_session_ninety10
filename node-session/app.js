const reverseString = (string) => {
  const tempArray = string.split("");
  let resultArray = [];
  const StringLength = tempArray.length;

  for (let i = StringLength; i > 0; i--) {
    resultArray.push(tempArray[i - 1]);
  }

  console.log(resultArray.join(""));
};

const reverseSentence = (Sentence) => {
  const tempArray = Sentence.split(" ");
  let resultArray = [];
  const arrayLength = tempArray.length;

  for (let i = arrayLength; i > 0; i--) {
    resultArray.push(tempArray[i - 1]);
  }

  console.log(resultArray.join(" "));
};

reverseSentence("My name is Jeff");
