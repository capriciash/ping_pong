var listArray = [];

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());

    for (index = 0; index <= number; index -= 1) {
      listArray.push(inputNumber - index);
    }

    console.log(inputNumber);
    console.log(listArray);


  $("#finalList").show();

      // $("ul").append("<li>" + listArray[0] + "</li>");
      // $("ul").append("<li>" + itemInputs[1] + "</li>");
      // $("ul").append("<li>" + itemInputs[2] + "</li>");
      // $("ul").append("<li>" + itemInputs[3] + "</li>");
      // $("ul").append("<li>" + itemInputs[4] + "</li>");
  });
});


// numbers.forEach(function(number) {
//   var currentNumber = $("input#" + number).val();
//   listArray.push(currentNumber);
// });
