(function(window){
    'use strict';
  
    // the js library object definition
    function define_Library(){
        // the Library object itself.  Will add members to it.
        var Library = {};
        var name = "Geoff";
      
        var getWeather = function() {
          return 'It is sunny today';
        }
      
        // define a member as a function
        Library.greet = function(){
            console.log("Hello from the " + name + " library.");
            console.log(getWeather());
        };
      
        Library.goodbye = function(){
          console.log("Goodbye "+ name);
        }
        
        return Library;
    }
    
    //define globally if it doesn't already exist
    if(typeof(Library) === 'undefined'){
        window.Library = define_Library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);

var l = Library;
l.greet();
l.goodbye();


/* ROBERTOS IMs
BE the source
Take the red pill.
we're all going to half to take the red bill if the Trumpkins take over
Let me send you my code. Don't laugh at the date generating code. It's just to show that the timing logic works. Click on the word "pause" to pause. For fun, run it with the console on.
ok, cool
Let me know if it comes through. Sometimes gmail filters attached js files.
yeah, got it.  that interval counter is heading towards inifinity!
not seeing the images though...that might be blocked
No images
It just generates the url.
ah yes, commented out
I'll put that all back in now.
check this out:
https://jsbin.com/keruguy/edit?js,console,output
that's your mini js library
it's wrapped in (function(window){})(window); so that you can check to see if a library called "Library" is already defined
Sorry, was putting the kids to bed
first of all, what is this jsbin site?
it's an online js conole
Is that your code you're sharing with me
for development and testing
yes
Am I "keruguy"?
no.  that is just the unique id for my jsbin session
so that I can share with you
or anyone
fuckena. That's cool.
Did you write this now? Or is it code you already had?
now
I borrowed the window library check as I had not done that in the past
copy that sucker and play with it
So, say this library is called "Library". Then I do a
require("Library");
then
var lib = Library;
then
console.log(lib.getWeather);
 
Is that about right?
It would console "It is sunny today"
yes...in fact you can just link the js file I believe
Even better!
well, not the getWeather() function.  that one is defined as local scope, local to the library object
to make the getWeather() public you would remove "var" in front of it
Oh right.
can you see l.goodbye(); at the bottom of the code ?
I actually understand why that is.
(this part: "to make the getWeather() public you would remove "var" in front of it")
yeah, just wanted to demonstrate local members (getWeather) vs public members (greet, goodbye)
looking...
Still looking at the code...
Is there a js protocol I'm not aware of that says if a function name starts with "define_" then that means something special?
no.  just did that to differentiate from the word "Library".
the "Library" var, which represents the library object can be anythign as well.  Even an underscore "_" or "$", as in jquery
No no, I was confused about something else.
Now I get it.
You are assigning Library to the window.
Then assign l = Library
yes, registering it
yes
if I tried calling l.getWeather() I would get a scope error
Could you do l.define_Library.getWeather()  ?
hmmm, let's see
I wonder if you can see the changes I make real-time
I am watching you type. That is so damn awesome.
no, throws error because it diff scope
window.Library = define_Library();
assigns the libaray definition to the Library object of window
OK, I see that.
you can make changes and run by clicking the Run with JS button on right
I'll have to give a lot of credit to a class on Udemy I took called "Understanding Javascript - The Weird Parts"
It focused on all the weird JS behaviors.
sounds like you got a lot out of it
I need to step away for a few minutes.  javi is still awake!
Go to it, Daddy,.
I am back
Is he doing ok?
yep.  finally fell asleep
I'm going to do the same. Thanks a lot for your help. I copied your code. Hopefully I can incorporate it.
cool.  sure, no problem
have a good night
You too.



*/