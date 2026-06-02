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
/* ==========================
MESSAGES STORAGE
========================== */

let herMessages =
JSON.parse(
localStorage.getItem("herMessages")
) || [];

let myMessages =
JSON.parse(
localStorage.getItem("myMessages")
) || [];

/* HER */

function addHerMessage(){

const title =
document.getElementById("herTitle").value;

const message =
document.getElementById("herMessage").value;

if(!title || !message) return;

herMessages.push({
title,
message
});

localStorage.setItem(
"herMessages",
JSON.stringify(herMessages)
);

document.getElementById("herTitle").value="";
document.getElementById("herMessage").value="";

renderHerMessages();

}

/* MY */

function addMyMessage(){

const title =
document.getElementById("myTitle").value;

const message =
document.getElementById("myMessage").value;

if(!title || !message) return;

myMessages.push({
title,
message
});

localStorage.setItem(
"myMessages",
JSON.stringify(myMessages)
);

document.getElementById("myTitle").value="";
document.getElementById("myMessage").value="";

renderMyMessages();

}

function renderHerMessages(){

const container =
document.getElementById("herMessages");

if(!container) return;

container.innerHTML="";

herMessages.forEach((item,index)=>{

container.innerHTML += `
<div class="letter-card">

<h3>${item.title}</h3>

<p>${item.message}</p>

<button
class="delete-message"
onclick="deleteHerMessage(${index})">

Delete

</button>

</div>
`;

});

}

function renderMyMessages(){

const container =
document.getElementById("myMessages");

if(!container) return;

container.innerHTML="";

myMessages.forEach((item,index)=>{

container.innerHTML += `
<div class="letter-card">

<h3>${item.title}</h3>

<p>${item.message}</p>

<button
class="delete-message"
onclick="deleteMyMessage(${index})">

Delete

</button>

</div>
`;

});

}

function deleteHerMessage(index){

herMessages.splice(index,1);

localStorage.setItem(
"herMessages",
JSON.stringify(herMessages)
);

renderHerMessages();

}

function deleteMyMessage(index){

myMessages.splice(index,1);

localStorage.setItem(
"myMessages",
JSON.stringify(myMessages)
);

renderMyMessages();

}

renderHerMessages();
renderMyMessages();
/* ==========================
COUNTERS PAGE
========================== */

function saveKissDate(){

const value =
document.getElementById("kissDate");

if(!value) return;

localStorage.setItem(
"kissUpdated",
value.value
);

loadCounterDates();

}

function saveHugDate(){

const value =
document.getElementById("hugDate");

if(!value) return;

localStorage.setItem(
"hugUpdated",
value.value
);

loadCounterDates();

}

function loadCounterDates(){

const kissUpdated =
document.getElementById("kissUpdated");

const hugUpdated =
document.getElementById("hugUpdated");

if(kissUpdated){

kissUpdated.innerHTML =
"Last Updated: " +
(localStorage.getItem("kissUpdated")
|| "02/04/2026");

}

if(hugUpdated){

hugUpdated.innerHTML =
"Last Updated: " +
(localStorage.getItem("hugUpdated")
|| "09/03/2026");

}

}

function daysSince(dateString){

const start =
new Date(dateString);

const today =
new Date();

const diff =
today - start;

return Math.floor(
diff /
(1000*60*60*24)
);

}

function loadRelationshipCounters(){

const proposal =
document.getElementById("proposalDays");

const yes =
document.getElementById("yesDays");

const kiss =
document.getElementById("kissDays");

const hug =
document.getElementById("hugDays");

if(proposal){

proposal.innerHTML =
daysSince("2022-08-02")
+ " Days";

}

if(yes){

yes.innerHTML =
daysSince("2026-03-21")
+ " Days";

}

if(kiss){

kiss.innerHTML =
daysSince("2026-04-02")
+ " Days";

}

if(hug){

hug.innerHTML =
daysSince("2026-03-09")
+ " Days";

}

}

loadCounterDates();

loadRelationshipCounters();
/* ==========================
LOVE COUNTERS
========================== */

let kissCount =
parseInt(localStorage.getItem("kissCount")) || 1;

let hugCount =
parseInt(localStorage.getItem("hugCount")) || 1;

function updateKiss(){

const count =
document.getElementById("kissCount");

const emojis =
document.getElementById("kissEmojis");

const updated =
document.getElementById("kissUpdated");

if(!count) return;

count.innerHTML = kissCount;

emojis.innerHTML =
kissCount <= 20
? "😘".repeat(kissCount)
: `😘 × ${kissCount}`;

updated.innerHTML =
"Last Updated: " +
(localStorage.getItem("kissUpdated")
|| "Not Updated Yet");

}

function updateHug(){

const count =
document.getElementById("hugCount");

const emojis =
document.getElementById("hugEmojis");

const updated =
document.getElementById("hugUpdated");

if(!count) return;

count.innerHTML = hugCount;

emojis.innerHTML =
hugCount <= 20
? "🫂".repeat(hugCount)
: `🫂 × ${hugCount}`;

updated.innerHTML =
"Last Updated: " +
(localStorage.getItem("hugUpdated")
|| "Not Updated Yet");

}

function changeKiss(value){

kissCount += value;

if(kissCount < 0)
kissCount = 0;

localStorage.setItem(
"kissCount",
kissCount
);

localStorage.setItem(
"kissUpdated",
new Date().toLocaleString()
);

updateKiss();

}

function changeHug(value){

hugCount += value;

if(hugCount < 0)
hugCount = 0;

localStorage.setItem(
"hugCount",
hugCount
);

localStorage.setItem(
"hugUpdated",
new Date().toLocaleString()
);

updateHug();

}

function daysSince(dateString){

const start =
new Date(dateString);

const today =
new Date();

const diff =
today - start;

return Math.floor(
diff /
(1000*60*60*24)
);

}

function loadRelationshipCounters(){

const proposal =
document.getElementById("proposalDays");

const yes =
document.getElementById("yesDays");

const kiss =
document.getElementById("kissDays");

const hug =
document.getElementById("hugDays");

if(proposal)
proposal.innerHTML =
daysSince("2022-08-02") + " Days";

if(yes)
yes.innerHTML =
daysSince("2026-03-21") + " Days";

if(kiss)
kiss.innerHTML =
daysSince("2026-04-02") + " Days";

if(hug)
hug.innerHTML =
daysSince("2026-03-09") + " Days";

}

updateKiss();
updateHug();
loadRelationshipCounters();
/* ==========================
TIMELINE STORAGE
========================== */

let timelineEvents =
JSON.parse(
localStorage.getItem("timelineEvents")
) || [

{
date:"2022-08-02",
title:"❤️ First Proposal",
description:"Proposed Praniti at 12:45 PM"
},

{
date:"2024-01-29",
title:"📱 First Instagram Message",
description:"Messaged her on Instagram at 10:30 PM"
},

{
date:"2025-01-15",
title:"☕ First Meeting",
description:"Met for the first time for 30 minutes"
},

{
date:"2025-01-17",
title:"🙏 Tuljapur Blessing",
description:"God's blessing for future together"
},

{
date:"2025-10-14",
title:"❤️ Closeness Feeling",
description:"Praniti expressed her closeness feeling"
},

{
date:"2025-11-03",
title:"🌹 Longest Date",
description:"Spent 2.5 hours together"
},

{
date:"2025-11-27",
title:"🎁 Surprise Date",
description:"Special surprise memory"
},

{
date:"2026-01-28",
title:"🫂 First Virtual Hug",
description:"First virtual hug"
},

{
date:"2026-02-14",
title:"😘 First Virtual Kiss",
description:"First virtual kiss"
},

{
date:"2026-03-09",
title:"🫂 First Hug",
description:"First hug"
},

{
date:"2026-03-21",
title:"❤️ She Said YES",
description:"Accepted the proposal"
},

{
date:"2026-04-02",
title:"😘 First Kiss",
description:"First kiss"
}

];

function saveTimeline(){

localStorage.setItem(
"timelineEvents",
JSON.stringify(timelineEvents)
);

}

function addTimelineEvent(){

const date =
document.getElementById("eventDate");

const title =
document.getElementById("eventTitle");

const description =
document.getElementById("eventDescription");

if(
!date ||
!title ||
!description
) return;

if(
!date.value ||
!title.value ||
!description.value
) return;

timelineEvents.push({

date:date.value,

title:title.value,

description:description.value

});

timelineEvents.sort(
(a,b)=>
new Date(a.date)
-
new Date(b.date)
);

saveTimeline();

date.value="";
title.value="";
description.value="";

renderTimeline();

}

function deleteTimelineEvent(index){

timelineEvents.splice(index,1);

saveTimeline();

renderTimeline();

}

function renderTimeline(){

const container =
document.getElementById(
"timelineContainer"
);

if(!container) return;

container.innerHTML="";

timelineEvents.forEach(
(event,index)=>{

container.innerHTML += `

<div class="event">

<div class="timeline-date">

${event.date}

</div>

<h2>

${event.title}

</h2>

<p>

${event.description}

</p>

<button
class="timeline-delete"
onclick="deleteTimelineEvent(${index})">

Delete

</button>

</div>

`;

});

}

renderTimeline();
