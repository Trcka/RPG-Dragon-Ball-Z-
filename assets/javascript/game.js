$(document).ready(function() {

var fighter ={
  goku : {
    healthPoints:700,
    attackPoints:150,
    counter:175
  },
 vegeta : {
    healthPoints:500,
    attackPoints:200,
    counter:200
  },
 gohan : {
    healthPoints:1000,
    attackPoints:100,
    counter:150
  },  yamcha : {
    healthPoints:300,
    attackPoints:10,
    counter:10
  }
}
  var yourHealth;
  var opponentHealth;
//fighter.goku, 

//ending of Z-fighters var

//pick a char, move char
var lock = false;
function pickFighter() {
  if(lock===false){
  	var userHero = $(event.target);
  	var sourceHero = userHero.src;
    var heroID = userHero[0].id;
    var hero = fighter[heroID];
    userHero.hide();
    $(".name").text(heroID);
    $(".usersFighter").attr("src", sourceHero);
    console.log(heroID);
    lock=true;
    console.log($(event.log))
    console.log(event.log)
    

  };
};

function pickOpponent() {
  if(lock===true){
    var opponent = $(event.target);
    var source = opponent.src;
    var opponentID = opponent[0].id;
    var opponentHero = fighter[opponentID];
    opponent.hide();
    //console.log(event.target);
    $(".opName").text(opponentID);
    $(".opponent").attr("src", source);
    canFight=true;
    console.log(opponentID);
  };
};
var canFight= false;
$("#fight").on("click",function(){
  // if(canFight===true){
  // 	var fighter=fighter[this.id];
  	

  	});

$(".btn").on("click",function(){
pickFighter();
pickOpponent();


});
});