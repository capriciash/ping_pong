//BUSINESS LOGIC

var counts = [];
var inputNumber;

var arrayMaker = function(number, array) {
  for (var i = 1; i <= number; i += 1) {
    array.push(i);
  };
};

var pingPong = function(number, array) {
  for (var i = 0; i <= number; i += 1) {
    if ((array[i] % 15 === 0)) {
      array[i] = "pingpong";
    } else if (array[i] % 3 === 0) {
      array[i] = "ping";
    } else if (array[i] % 5 === 0) {
      array[i] = "pong";
    };
  };
};

function numTest(number) {
  if (number < 1) {
    alert("Please enter a number greater than 1.");
  };
}

function resetFields() {
  $("input#number").val("");
  counts = [];
}


// USER INTERFACE
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());

    arrayMaker(inputNumber, counts);
    numTest(inputNumber);
    pingPong(inputNumber, counts);

    counts.forEach(function(count) {
      $("ul#insert").append("<li class='some'>" + count + "</li>");
    });

    $(".sidebar").show();
    $("#finalList").show();

    $("button.btn").click(function() {
      $("li.some").remove();
    });

    resetFields();
  });
});
