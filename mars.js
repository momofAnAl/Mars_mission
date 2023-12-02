
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

const username = prompt("Hi there. What's your name?");
alert(`Hi, ${username} --- Welcome to The Mars Adventure Game.`);
alert('Yesterday, you received a call from your good friend at NASA.');
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

let excited = prompt('Are you excited? Type Y or N');
excited = excited.toUpperCase();
if (excited === 'Y') {
    alert("I knew you'd say that. It's so cool that you're going to Mars!");
}
  
  if (excited === 'N') {
    alert("Well, it's too late to back out now.");
}

alert("It's time to pack for your trip to Mars.");
// Ask suitcases to bring
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);
if (numSuitcases > 2) {
    alert("That's way too many. You'll have to pack more lightly.");
} else {
    alert("Perfect. You'll certainly fit in the spaceship!");
}
// ask user about Companion Animal
alert("You're allowed to bring one companion animal with you.");
let companionType = prompt("What kind of companion animal would you like to bring?"); 
let companionName = prompt("What is your companion's name?");

//improve companionName display
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let firsType = companionType[0];
firsType = firsType.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

let otherTypes = companionType.slice(1);
otherTypes = otherTypes.toLowerCase();

companionName = firstLetter + otherLetters
companionType = firsType +otherTypes
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`)

// Spaceship decor
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decoreChoice = prompt("Which decor would you like? Choose A, B, or C. ");
decoreChoice = decoreChoice.toUpperCase();

let decor;
if (decoreChoice === "A") {
    decor = "Sleek, mordern minimalism";
} else if (decoreChoice === "B") {
    decor = "Retro/Vintage space age";
} else if (decoreChoice === "C") {
    decor = "Victorian-era steampunk";
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} space`);

//countdown to take off
// alert("5...");
// alert("4...");
// alert("3...");
// alert("2...");
// alert("1...");
// alert("***LIFTOFF***");

//using while loop to countdown
//make counter variable timer
let timer = 5
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1 ;
}
alert("***LIFTOFF***")



