
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
$(".btn").on("click", function(){
  if(fighterPicked===false){
  $(".hp").text(this.value);
  console.log((this.value).healthPoints)

}
});











