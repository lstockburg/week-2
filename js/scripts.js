$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=febe]:checked").val()) + parseInt($("input:radio[name=dof]:checked").val()) +
    parseInt($("#appeal").val()) +
    parseInt($("#lang").val()) +
    parseInt($("#comp").val());
    if (score >= 5 && score <= 7) {
      $(".result").show();
      $("#track").text("Java");
      $("#whatbuild").text("applications");
    }
    else if (score >= 8 && score <= 10) {
      $(".result").show();
      $("#track").text("Ruby");
      $("#whatbuild").text("frameworks");
    }
    else {
      $(".result").show();
      $("#track").text("C#");
      $("#whatbuild").text("software");
    }
  });
});
