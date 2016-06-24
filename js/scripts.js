$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

//BUSINESS LOGIC
    var counts = [];

//Take input from user
    var inputNumber = parseInt($("input#number").val());

//Create array form user input
    for (var i = 1; i <= inputNumber; i += 1) {
        counts.push(i);
      };

//Replace numbers with ping and pong
    for (var i = 0; i <= inputNumber; i += 1) {
      if ((counts[i] % 15 === 0)) {
        counts[i] = "pingpong";
      } else if (counts[i] % 3 === 0) {
        counts[i] = "ping";
      } else if (counts[i] % 5 === 0) {
        counts[i] = "pong";
      }
    };

//Deal with situations when user enters a number less than 1.
    if (inputNumber < 1) {
      alert("Please enter a number greater than 1.");
    };

//Refresh the list when the user submits another number.
    $("button.btn").click(function() {
      $("li.some").remove();
    });

//Show the list and display the final array on the page
    counts.forEach(function(count) {
      $("ul#insert").append("<li class='some'>" + count + "</li>");
    });

    $(".sidebar").show();
    $("#finalList").show();

  });
});
