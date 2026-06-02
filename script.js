const questions = [

{
q:"When did she say Yes to my proposal?",
a:"21/03/2026"
},

{
q:"When was the Tuljapur blessing?",
a:"17/01/2025"
},

{
q:"When did we first hug?",
a:"09/03/2026"
},

{
q:"When did we first kiss?",
a:"02/04/2026"
}

];

const randomQuestion =
questions[
Math.floor(Math.random()*questions.length)
];

document.getElementById("question").innerText =
randomQuestion.q;

function checkAnswer(){

const userAnswer =
document.getElementById("answer").value.trim();

if(userAnswer===randomQuestion.a){

document.getElementById("lockScreen")
.style.display="none";

document.getElementById("homePage")
.style.display="block";

}
else{

document.getElementById("error").innerText =
"Wrong memory ❤️";

}

}

function showRandomQuote(){

const quotes = [

"Every memory with you is my favorite.",

"The stars know our story.",

"Some journeys begin with a hello.",

"Forever starts with small moments."

];

document.getElementById("quoteBox")
.innerText =
quotes[
Math.floor(Math.random()*quotes.length)
];

}
