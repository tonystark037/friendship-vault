const qs=[
['When did she say Yes to my proposal?','21/03/2026'],
['When was the Tuljapur blessing?','17/01/2025'],
['When did we first hug?','09/03/2026']
];
const q=qs[Math.floor(Math.random()*qs.length)];
document.getElementById('q').innerText=q[0];
function check(){
if(document.getElementById('a').value===q[1]) location.href='timeline.html';
else document.getElementById('m').innerText='Try again ❤️';
}