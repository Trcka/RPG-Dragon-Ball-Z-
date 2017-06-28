$(document).ready(function() {

  var fighter = {
    goku: {
      healthPoints: 7000,
      attackPoints: 150,
      counter: 175
    },
    vegeta: {
      healthPoints: 5000,
      attackPoints: 200,
      counter: 200
    },
    gohan: {
      healthPoints: 10000,
      attackPoints: 100,
      counter: 150
    },
    krillin: {
      healthPoints: 3000,
      attackPoints: 10,
      counter: 10
    }
  }



  var yourHealth;
  var opponentHealth;
  var yourAttack;
  var opponentCounter;
  var attackIncrease;
  var opponentsDeafeated = 0;



  var isUserLocked = false;
  var needToSetOpponent = true;


  $(".fighter").click(function(event) {
    if ((isUserLocked === false) && (needToSetOpponent === true)) {
      var chosen = event.currentTarget;
      var userFighter = fighter[chosen.id];
      var source = $(event.target).attr("src");
      $(event.currentTarget).hide()
      $(".usersFighter").attr("src", source)
      console.log(userFighter);
      isUserLocked = true;
      needToSetOpponent = true;
      yourHealth = userFighter.healthPoints;
      yourAttack = userFighter.attackPoints;
      attackIncrease = userFighter.attackPoints;
      $(".whatToDo").text("PICK A NEW OPPONENT!")
    } else if (needToSetOpponent === true) {
      var opponent = event.currentTarget;
      var opponentFighter = fighter[opponent.id];
      var source = $(event.target).attr("src");
      $(event.currentTarget).hide()
      $(".opponent").attr("src", source)
      $("#opponentFighterDiv").append($(opponent).detach());
      needToSetOpponent = false;
      opponentHealth = opponentFighter.healthPoints;
      opponentCounter = opponentFighter.counter;
      opponentsDeafeated++



    }
  })

  $("#fight").on("click", function() {



    if (yourHealth <= 0) {
      alert("you lose!");
      $(".health").text(yourHealth);
      $(".opHealth").text(opponentHealth);

    } else if (opponentsDeafeated === 3) {

      alert("you win")
        //reset stuff
        $(".health").text(yourHealth);
        $(".opHealth").text(opponentHealth);
    } else if(opponentHealth<=0) {
    	$(".health").text(yourHealth);
    	$(".opHealth").text(opponentHealth);
    	needToSetOpponent=true;
    	$(".whatToDo").text("PICK A NEW OPPONENT!")



    }else{
    	$(".whatToDo").text("FIGHT!!!")
    	$(".health").text(yourHealth);
    	$(".opHealth").text(opponentHealth);
    	    opponentHealth -= yourAttack;
    		yourHealth -= opponentCounter;
    		yourAttack += attackIncrease;

    }




    console.log(yourHealth)
    console.log(yourAttack)
    console.log(opponentHealth)
    console.log(opponentCounter)

  })



});
