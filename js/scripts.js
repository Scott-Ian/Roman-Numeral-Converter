// Business Logic



// UI Logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("#numeral").val();
    $("#results").text(userInput)
  });
});