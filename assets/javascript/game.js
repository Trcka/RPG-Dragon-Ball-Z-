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
var lock = false;
function pickFighter() {
  if(lock===false){
    var hero = $(event.target)
    var source = $(event.target).attr("src");
    console.log(source)
    hero.hide();
    console.log(event.target);
    $(".name").text(hero.attr("value"))
    $(".usersFighter").attr("src",source)
    lock=true;
console.log(lock)
  };
};

function pickOpponet() {
  if(lock===true){
    var opponet = $(event.target)
    var source = $(event.target).attr("src");
    console.log(source)
    opponet.hide();
    console.log(event.target);
    $(".opName").text(opponet.attr("value"))
    $(".opponet").attr("src",source)
    console.log(lock)
  };
};

function fight(){

};



$(".btn").on("click",function(){
pickFighter();
pickOpponet();

});










});