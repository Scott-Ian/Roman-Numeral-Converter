// Business Logic
function romanNumeralConverter (number) {
  let numeralArray = [];

  for (number; number > 0; number--) {
    numeralArray.push("I");
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

    $("#results").text(results)
  });
});