// business logic
var BeepBoopInput = function test(input) {

   var results = [];
   for (var i = 0; i <= input; i++) {

    if (i % 3 == 0 ) {
       results.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
    else if (i.toString().match(/0/)) {
       results.push("0")
      }
    else if (i.toString().match(/1/)) {
       results.push("Beep!")
      }
    else if (i.toString().match(/2/)) {
       results.push("Boop!")
      }
    else {
       results.push(i);
     }
   }
   return results;
 }

// front-end logic

$(document).ready(function(){
  $('form#numeral-input').submit(function(event){
    event.preventDefault();
    var number = parseInt($('#numeral').val());
    var convertednumber = BeepBoopInput(number)
    $(".createdoutput").html(convertednumber)
    $("#result").show();
  });
});
