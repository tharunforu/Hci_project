$(".chk").on("click", function(event) {
  var greval = Number($(".gre").val());
  var pubval = Number($(".pub").val());
  var gval = Number($(".cgpa").val());

  var p = 0;


  if (pubval === 0) {

    p = 40;
  } else if (pubval>=1 && pubval< 3) {

    p = 80;
  } else if ( pubval>=3) {

    p = 100;
  }

  console.log(gval, greval, pubval);
  var res = ((gval/0.04) + 2.5* p + 2.5 *( greval/3.40)) / 600;

    $(".re").text("your chances of getting admission are " + ((String(res * 100)).substring(0, 5) + "%"));

});
$(".rf").on("click", function(event) {
  location.reload();

});
