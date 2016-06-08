$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


      if (gender === "male" && age < 21) {
      $("#Miley").show();
      $("#Scarlett").hide();
      $("#Hillary").hide();
      $("#Obama").hide();
    } else if (gender === "male" && age >= 21 && age <= 30) {
      $("#Scarlett").show();
      $("#Miley").hide();
      $("#Hillary").hide();
      $("#Obama").hide();
    } else if (gender === "male" && age > 30) {
      $("#Hillary").show();
      $("#Scarlett").hide();
      $("#Miley").hide();
      $("#Obama").hide();
    } else if (gender === "female") {
      $("#Obama").show();
      $("#Hillary").hide();
      $("#Scarlett").hide();
      $("#Miley").hide();

    } else {
      alert("Please enter information correctly. Refresh and try again!");
    }
    event.preventDefault();
  });
});
