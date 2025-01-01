import $ from "jquery";

$(document).ready(function () {
  //   console.log("got here");
  $(".hamburger").click(function (e) {
    // console.log("got here2");
    let $menu = $(this).parent();
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $menu.addClass("open");
    } else {
      $(this).removeClass("active");
      $menu.removeClass("open");
    }
    e.preventDefault();
  });
});
