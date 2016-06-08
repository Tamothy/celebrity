$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

      if (gender === "male" && age < 21) {
      $("#Miley").show();
    } else if (gender === "male" && age >= 21 && age <= 30) {
      $("#Scarlett").show();
    } else if (gender === "male" && age > 30) {
      $("#Hillary").show();
    } else if(gender === "female") {
      $("#Obama").show();
    } else {
      alert("Please enter information correctly. Refresh and try again!");
    }
    event.preventDefault();
  });
});
