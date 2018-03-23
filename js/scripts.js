$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=febe]:checked").val()) + parseInt($("input:radio[name=dof]:checked").val()) +
    parseInt($("#appeal").val()) +
    parseInt($("#lang").val()) +
    parseInt($("#comp").val());
    if (score >= 5 && score <=7) {

    }
