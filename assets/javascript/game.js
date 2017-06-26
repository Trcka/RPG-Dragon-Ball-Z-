var zFighters = {
  goku : {
    healthPoints:700,
    attackPoints:150,
    counter:175,
  },
  vegeta : {
    healthPoints:500,
    attackPoints:200,
    counter:200
  },
  gohan : {
    healthPoints:1000,
    attackPoints:100,
    counter:150,
  },
  yamcha : {
    healthPoints:300,
    attackPoints:10,
    counter:10
  }
};
console.log(zfighters.goku.counter)
//ending of Z-fighters var
$("#hp").text(zfighters.goku.healthPoints);
