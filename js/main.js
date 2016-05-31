$( document ).ready(function() {
  $(".test").click(function() {

  // $("li").addClass(".hide");

  $("#1").toggleClass("hide");
  $(".test").toggleClass("hide");
  // $(".test").addClass(".hide");


  });

  $("#1").click(function() {
      $(".test").toggleClass("hide");
      $("#1").toggleClass("hide");

  });

  // 2 //

  $(".test2").click(function() {

  // $("li").addClass(".hide");

  $("#2").toggleClass("hide");
  $(".test2").toggleClass("hide");
  // $(".test").addClass(".hide");


  });

  $("#2").click(function() {
      $(".test2").toggleClass("hide");
      $("#2").toggleClass("hide");

  });

  // 3 //

  $(".test3").click(function() {

  // $("li").addClass(".hide");

  $("#3").toggleClass("hide");
  $(".test3").toggleClass("hide");
  // $(".test").addClass(".hide");


  });

  $("#3").click(function() {
      $(".test3").toggleClass("hide");
      $("#3").toggleClass("hide");

  });


  // 4 //

  $(".test4").click(function() {

  // $("li").addClass(".hide");

  $("#4").toggleClass("hide");
  $(".test4").toggleClass("hide");
  // $(".test").addClass(".hide");


  });

  $("#4").click(function() {
      $(".test4").toggleClass("hide");
      $("#4").toggleClass("hide");

  });

});
