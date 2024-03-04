var megamenumoblie = document.querySelectorAll(".megamenunavmobile div");
console.log(megamenumoblie);
for(var i of megamenumoblie){
    $(i).hide();
}
$(".megamenunavmobile").click(function (e) {
  var innerdiv = this.querySelector("div");
  var inneri = this.querySelector("i");
  $(inneri).toggleClass("before:-rotate-180");
  $(innerdiv).slideToggle();
});
$("#megamenunavOpen").click(function (e) {
  e.preventDefault();
  $("#mobileMenu").removeClass("left-full");
  $("#mobileMenu").addClass("left-0");
});
$("#mobileMenuClose").click(function (e) {
  e.preventDefault();
    $("#mobileMenu").removeClass("left-0");
  $("#mobileMenu").addClass("left-full");
});