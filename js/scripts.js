// business logic
var convertToRoman = function(num) {
    var romanNumeral = ["M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var numberequiv = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romanized = "";

  for (var index = 0; index < numberequiv.length; index++) {
    while (numberequiv[index] <= num) {
      romanized += romanNumeral[index];
      num -= numberequiv[index];
    }
  }
  console.log(romanized)
  return romanized;
};

// user interface logic
$(document).ready(function() {
  $("form#numeral-input").submit(function(event) {
    event.preventDefault()
    var number = $("#numeral").val()
    var convertednumber = convertToRoman(number)
    $(".createdoutput").html(convertednumber)
    $("#result").show();
  });
});