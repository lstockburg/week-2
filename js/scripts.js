$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var name = ($("input:text[name=person]").val());
    var score = parseInt($("input:radio[name=febe]:checked").val()) + parseInt($("input:radio[name=dof]:checked").val()) +
    parseInt($("#appeal").val()) +
    parseInt($("#lang").val()) +
    parseInt($("#comp").val());
    if (score >= 5 && score <= 7) {
      $(".result").show();
      $("#name").text(name);
      $("#track").text("Java");
      $("#whatbuild").text("applications");
    }
    else if (score >= 8 && score <= 10) {
      $(".result").show();
      $("#name").text(name);
      $("#track").text("Ruby");
      $("#whatbuild").text("frameworks");
    }
    else {
      $(".result").show();
      $("#name").text(name);
      $("#track").text("C#");
      $("#whatbuild").text("software");
    }
  });
});
