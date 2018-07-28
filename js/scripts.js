$(document).ready(function() {
  alert("jquery is working");
})

$(document).ready(
  function() {
    alert($("#css-item").text());
  }
)

$(document).ready(function() {
  $("#goal-button").click(
    function() {
      console.log("input value " + $("#new-goal").val());
      $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
      $("#new-goal").val("");
    })
  }
)
