$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=febe]:checked").val()) + parseInt($("input:radio[]"))
