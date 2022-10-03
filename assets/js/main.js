// 

$(document).ready(function () {
  // Tooltipped 
  $('.tooltipped').tooltip();
  // 
  $(".carousel").carousel({
    indicators: true,
    duration: 100,
    shift: 1,
  });
  $(".tabs").tabs({
    indicators: true,
  });
  $(".slider").slider({
    height: 300,
  });
  $(".sidenav").sidenav();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  });
  $(".dropdown-trigger").dropdown({
    constrainWidth: true,
  });
  $('.collapsible').collapsible();
});