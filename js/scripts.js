$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var listArray = [];
    numbers.forEach(function(number) {
      var numberList = $("input#" + number).val();
      listArray.push(numberList);
    });

    alert(listArray);

      $("#finalList").show();

      // $("ul").append("<li>" + listArray[0] + "</li>");
      // $("ul").append("<li>" + itemInputs[1] + "</li>");
      // $("ul").append("<li>" + itemInputs[2] + "</li>");
      // $("ul").append("<li>" + itemInputs[3] + "</li>");
      // $("ul").append("<li>" + itemInputs[4] + "</li>");
  });
});
