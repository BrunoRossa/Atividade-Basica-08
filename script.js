function checkPalindrome() {
    const inputWord = document.getElementById("input-word").value;
    const reversedWord = inputWord.split("").reverse().join("");
    
    if (inputWord === reversedWord) {
      document.getElementById("result").textContent = "A palavra é um palíndromo";
    } else {
      document.getElementById("result").textContent = "A palavra não é um palíndromo";
    }
  }
  