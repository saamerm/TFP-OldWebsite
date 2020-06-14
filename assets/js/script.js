
$(".projects__grid").masonry({
  columnWidth: 10,
  itemSelector: ".projects__grid-project",
  gutter: 0,
});
$(document).ready(function() {
  $("#emailLnk").click(function()
   {
       var email = document.getElementById('email').innerHTML;
       var body = document.getElementById('body').innerHTML;
       alert(email+body);
       document.location.href = "mailto:" + email + "?subject=Interest Form&body=" + body;
   });
});​
