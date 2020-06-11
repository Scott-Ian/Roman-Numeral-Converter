// Business Logic
function romanNumeralConverter (number) {
  let numeralArray = [];

  while(number > 0) {

    if (number >= 1000) {
      const timesDivisibleBy = Math.floor(number / 1000);
      number = number - (1000 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("M");
      }

    } else if (number >= 500) {
      const timesDivisibleBy = Math.floor(number / 500);
      number = number - (500 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("D");
      }

    } else if (number >= 100) {
      const timesDivisibleBy = Math.floor(number / 100);
      number = number - (100 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("C");
      }

    } else if (number >= 50) {
      const timesDivisibleBy = Math.floor(number / 50);
      number = number - (50 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("L");
      }

    } else if (number >= 10) {
      const timesDivisibleBy = Math.floor(number / 10);
      number = number - (10 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("X");
      } 

    } else if (number >=5) {
      const timesDivisibleBy = Math.floor(number / 5);
      number = number - (5 * timesDivisibleBy);
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("V");
      } 
  
    } else if (number >= 1) {
      const timesDivisibleBy = Math.floor(number / 1);
      number = number - timesDivisibleBy;
      for (let i =timesDivisibleBy; i > 0; i--) {
      numeralArray.push("I");
      }
    }
  }

  const numeralString = numeralArray.join("");
  return numeralString;
}


// UI Logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#numeral").val());
    console.log(`User Input: ${userInput}`);

    const results = romanNumeralConverter (userInput);

    $("#results").text(results);
  });
});