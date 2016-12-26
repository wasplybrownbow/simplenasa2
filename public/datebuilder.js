var d = new Date; 
var currYr = d.getFullYear();
var currMo = d.getMonth();
var currDa = d.getDay();
//var yesterday = getNDaysBeforeNow(1);

console.log(d);
var x = generateThreeNumbers();

function generateThreeNumbers() {
  var randYr = getRandomInRange(2016,currYr);
  var randMo = getRandomInRange(1,12);
  var maxDa  = daysInMonth(randMo, randYr);
  var randDa = getRandomInRange(1, maxDa);
  var three = {};
  three.yr = randYr;
  three.mo = randMo;
  three.da = randDa;
  if (randYr < currYr) {
    return three;
  } else if (randMo < currMo) {
    return three;
  } else if (randDa < currDa) {
    return three;
  } else {
    three.aaa = 'bad';
    three.currda = currDa;
    three.currmo = currMo;
    three.curryr = currYr;
    return three;
  }
}

function getNDaysBeforeNow(b){
  var a=new Date;
  a.setDate(a.getDate()-b);
  return a
};

function getRandomInRange(min, max) {
// Returns inclusive random whole number between min and max
  return Math.floor(Math.random() * (max - min +1) + min);
}

function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}
