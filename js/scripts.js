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

    $("button.btn").click(function() {
      $("li").remove();
    });

    counts.forEach(function(count) {
      $("ul#insert").append("<li>" + count + "</li>");
    });

    $(".sidebar").show();
    $("#finalList").show();

  });
});
