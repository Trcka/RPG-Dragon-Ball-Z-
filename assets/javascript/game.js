$(document).ready(function() {


 var goku = {
    healthPoints:700,
    attackPoints:150,
    counter:175
  }
var vegeta = {
    healthPoints:500,
    attackPoints:200,
    counter:200
  }
 var gohan = {
    healthPoints:1000,
    attackPoints:100,
    counter:150
  }
var  yamcha = {
    healthPoints:300,
    attackPoints:10,
    counter:10
  }
console.log(goku.counter);

//ending of Z-fighters var

//pick a char, move char
var fighterPicked = false;
function pickFighter() {
  if(fighterPicked===false){
    var hero = $(event.target)
    var source = $(event.target).attr("src");
    console.log(source)
    hero.hide();
    console.log(event.target);
    $(".name").text(hero.attr("value"))
    $(".usersFighter").attr("src",source)
    fighterPicked=true;

};

};




$(".btn").on("click",function(){
pickFighter()

});











});