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
99	:	.01,
98	:	.02,
97	:	.03,
96	:	.04,
95	:	.05,
94	:	.06,
93	:	.07,
92	:	.08,
91	:	.09,
90	:		.1,
89	:		.11,
88	:		.12,
87	:		.13,
86	:		.14,
85	:		.15,
84	:		.16,
83	:		.17,
82	:		.18,
81	:		.19,
80	:		.2,
79	:		.21,
78	:		.22,
77	:		.23,
76	:		.24,
75	:		.25,
74	:		.26,
73	:		.27,
72	:		.28,
71	:		.29,
70	:		.3,
69	:		.31,
68	:		.32,
67	:		.33,
66	:		.34,
65	:		.35,
64	:		.36,
63	:		.37,
62	:		.38,
61	:		.39,
60	:		.4,
59	:		.41,
58	:		.42,
57	:		.43,
56	:		.44,
55	:		.45,
54	:		.46,
53	:		.47,
52	:		.48,
51	:		.49,
50	:		.5,
49	:		.51,
48	:		.52,
47	:		.53,
46	:		.54,
45	:		.55,
44	:		.56,
43	:		.57,
42	:		.58,
41	:		.59,
40	:		.6,
39	:		.61,
38	:		.62,
37	:		.63,
36	:		.64,
35	:		.65,
34	:		.66,
33	:		.67,
32	:		.68,
31	:		.69,
30	:		.7,
29	:		.71,
28	:		.72,
27	:		.73,
26	:		.74,
25	:		.75,
24	:		.76,
23	:		.77,
22	:		.78,
21	:		.79,
20	:		.8,
19	:		.81,
18	:		.82,
17	:		.83,
16	:		.84,
15	:		.85,
14	:		.86,
13	:		.87,
12	:		.88,
11	:		.89,
10	:		.9,
9	:		.91,
8	:		.92,
7	:		.93,
6	:		.94,
5	:		.95,
4	:		.96,
3	:		.97,
2	:		.98,
1	:		.99	
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

