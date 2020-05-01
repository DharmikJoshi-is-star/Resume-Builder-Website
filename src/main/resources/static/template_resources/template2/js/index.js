$(document).ready(function () {
  $(".tabs").tabs();
  $(".scrollspy").scrollSpy();
  $(".sidenav")
    .sidenav()
    .on("click tap", "li a", () => {
      $(".sidenav").sidenav("close");
    });
});
