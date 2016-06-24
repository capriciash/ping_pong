$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());

    var counts = [];
    for (var index = 1; index <= inputNumber; index += 1) {
      counts.push(index);
    };

    for (var index = 0; index <= inputNumber; index += 1) {
      if ((counts[index] % 15 === 0)) {
        counts[index] = "pingpong";
      } else if (counts[index] % 3 === 0) {
        counts[index] = "ping";
      } else if (counts[index] % 5 === 0) {
        counts[index] = "pong";
      }
    };

    console.log(inputNumber);
    console.log(counts);

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
