//Vars 
var intervalTime = 60000;
var globalTime = 0;
var randomNumber = 0;
var pause = false;

var xmlhttp = new XMLHttpRequest();
//var url = "https://api.nasa.gov/planetary/apod?api_key=yI8IPZwsLPL9RRAnV67PEixBxc1izfhrs1bnr92V&hd=False&date=2016-05-28";

var expText = document.getElementById("explanationText");
var expBG   = document.getElementById("explanationBG");
var men = document.getElementById("menu");

//xmlhttp.open("GET", url, true);  // open just specifies and defines the request
//xmlhttp.send();  								 // send actually sends the request that I opened. (use with GET) 

// Kick off the forever loop 
var myVar = setInterval(forevor, 1000);

var opacMap = {  
10:	0.1,
11:	0.11,
12:	0.12,
13:	0.13,
14:	0.14,
15:	0.15,
16:	0.16,
17:	0.17,
18:	0.18,
19:	0.19,
20:	0.2,
21:	0.21,
22:	0.22,
23:	0.23,
24:	0.24,
25:	0.25,
26:	0.26,
27:	0.27,
28:	0.28,
29:	0.29,
30:	0.3,
31:	0.31,
32:	0.32,
33:	0.33,
34:	0.34,
35:	0.35,
36:	0.36,
37:	0.37,
38:	0.38,
39:	0.39,
40:	0.4,
41:	0.41,
42:	0.42,
43:	0.43,
44:	0.44,
45:	0.45,
46:	0.46,
47:	0.47,
48:	0.48,
49:	0.49,
50:	0.5,
51:	0.51,
52:	0.52,
53:	0.53,
54:	0.54,
55:	0.55,
56:	0.56,
57:	0.57,
58:	0.58,
59:	0.59,
60:	0.6,
61:	0.61,
62:	0.62,
63:	0.63,
64:	0.64,
65:	0.65,
66:	0.66,
67:	0.67,
68:	0.68,
69:	0.69,
70:	0.7,
71:	0.71,
72:	0.72,
73:	0.73,
74:	0.74,
75:	0.75,
76:	0.76,
77:	0.77,
78:	0.78,
79:	0.79,
80:	0.8,
81:	0.81,
82:	0.82,
83:	0.83,
84:	0.84,
85:	0.85,
86:	0.86,
87:	0.87,
88:	0.88,
89:	0.89,
90:	0.9,
91:	0.91,
92:	0.92,
93:	0.93,
94:	0.94,
95:	0.95,
96:	0.96,
97:	0.97,
98:	0.98,
99:	0.99	
};

// Listeners
document.getElementById("explanationBG").addEventListener("mouseover", showExplanation);
document.getElementById("explanationBG").addEventListener("mouseout", hideExplanation);
document.getElementById("explanationText").addEventListener("mouseover", showExplanation);
document.getElementById("explanationText").addEventListener("mouseout", hideExplanation);


document.getElementById("menu").addEventListener("mouseover", showMenu);
document.getElementById("menu").addEventListener("mouseout", hideMenu);


document.getElementById('togglePause').addEventListener('click', function(){
	globalTime = 0;
	if (pause === true) {
		pause = false;
		document.getElementById('togglePause').innerHTML = 'Pause Slideshow';	
		//console.log(pause);	
	} else {
		pause = true;
		document.getElementById('togglePause').innerHTML = 'Unpause Slideshow';		
		//console.log(pause);
	}
});

document.getElementById('setIntervalTime15').addEventListener('click', function(){
  globalTime = 0;
  intervalTime = 15000; 
  console.log('New intervalTime is 15000');
  document.getElementById("intervalDisplay").innerHTML = 'Interval: ' + intervalTime/1000 + ' seconds: ';
});
document.getElementById('setIntervalTime60').addEventListener('click', function(){
  globalTime = 0;
  intervalTime = 60000; 
  console.log('New intervalTime is 60000');
  document.getElementById("intervalDisplay").innerHTML = 'Interval: ' + intervalTime/1000 + ' seconds: ';
});
document.getElementById('setIntervalTime90').addEventListener('click', function(){
  globalTime = 0;
  intervalTime = 90000;
  console.log('New intervalTime is 90000');
  document.getElementById("intervalDisplay").innerHTML = 'Interval: ' + intervalTime/1000 + ' seconds: ';
});
document.getElementById('setIntervalTime120').addEventListener('click', function(){
  globalTime = 0;
  intervalTime = 120000;
  console.log('New intervalTime is 1200000');
  document.getElementById("intervalDisplay").innerHTML = 'Interval: ' + intervalTime/1000 + ' seconds: ';
});


function initialize() {
  //url = "https://api.nasa.gov/planetary/apod?api_key=yI8IPZwsLPL9RRAnV67PEixBxc1izfhrs1bnr92V&hd=False&date=";
  url = changeURL();
  console.log('one time!');
  console.log('initialized url is-->  ' + url);
  xmlhttp.open("GET", url, true);  
  xmlhttp.send();  
}

// functions 
function forevor() {
  globalTime += 1000;
  console.log(globalTime);
  document.getElementById("timerDisplay").innerHTML = 'Elapsed Time: ' + (globalTime/1000).toFixed(1);
  if (globalTime % intervalTime === 0 && !pause ) {
  	console.log('divisible by ' + intervalTime);
    
    url = changeURL();
    console.log('forevor url is--> ' + url);  
    xmlhttp.open("GET", url, true);  // open just specifies and defines the request
    xmlhttp.send();                  // send actually sends the request that I opened. (use with GET) 

  }
}

function changeURL() {
  //var dateDate;
  url = "https://api.nasa.gov/planetary/apod?api_key=yI8IPZwsLPL9RRAnV67PEixBxc1izfhrs1bnr92V&hd=False&date=";
  url += generateDateString();  
  // KEEP url += handlerFunc();
  return url 
  //url += dateString;
  // KEEP xmlhttp.open("GET", url, true);   
  //xmlhttp.send(); 
}

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //alert(xmlhttp.responseText);
        
        t=xmlhttp.responseText;
        t=JSON.parse(t);
        console.log('t.url = ' + t.url);
        //console.log('t.explanation = ' + t.explanation.slice(1,100));
        //console.log('t.media_type = ' + t.media_type);

        document.getElementById("pix").src = t.url;
        document.getElementById("explanationText").innerHTML = t.explanation;
        document.getElementById("explanationBG").innerHTML   = t.explanation;        
    }
}

function generateDateString() {
  var d = new Date;
  var currYr = d.getFullYear();
  var currMo = d.getMonth();
  var currDa = d.getDay();
  var randMo = getRandomInRange(1,12);
  var randYr = getRandomInRange(2000,currYr);
  var maxDa  = daysInMonth(randMo, randYr);
  var randDa = getRandomInRange(1, maxDa);
  
  var yesterday = getNDaysBeforeNow(1);
  var randDate = new Date(randYr, randMo, randDa);
    
  while (randDate > yesterday) {
    //regen randDate
    randDate = new Date(getRandomInRange(2000,currYr), getRandomInRange(1,12), getRandomInRange(1, maxDa));   
  }
    console.log('------------------------------------');
    console.log('** randDate = ' + randDate);
    //console.log('**   fullyr = ' + randDate.getFullYear());
    //console.log('**   month  = ' + randDate.getMonth().slice(-2));
    //console.log('**     day  = ' + randDate.getDay().slice(-2));
    return   randDate.getFullYear() + '-' + 
      ('0' + (randDate.getMonth()+1)).slice(-2) + '-' + 
      ('0' + (randDate.getDay()+1)).slice(-2);
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

function showExplanation() {
  //expBG.style.opacity = '.8';
  expText.style.opacity = '.8';
}

function hideExplanation() {
  expBG.style.opacity   = '0';
  expText.style.opacity = '0';
}

function showMenu() {
  men.style.opacity = '.8';
}

function hideMenu() {
  men.style.opacity = '0';
}


var explanationText = document.getElementById('explanationText'); 
var explanationBg   = document.getElementById('explanationBg'); 

explanationBG.onmousemove = function(e) { 

  var x = e.pageX - this.offsetLeft; 
  
  var newBGOpac = convertXToOpac(x);
  if (newBGOpac) {
    document.getElementById('explanationBG').style.opacity = newBGOpac;
  }  
}

function convertXToOpac(x) {
  var maxXVal = document.getElementById('explanationBG').offsetWidth;
  var perc = Math.floor(x/maxXVal * 100);

  if (opacMap.hasOwnProperty(perc)) {
    return opacMap[perc];
  } else {
    return false; 
  }
}

