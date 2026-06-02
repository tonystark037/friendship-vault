/* ====================================
   FRIENDSHIP VAULT
   SCRIPT.JS
==================================== */

/* ---------- THEME TOGGLE ---------- */

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeBtn.textContent = "☀️";
    }else{
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "🌙";
    }
});

/* ---------- FRIENDSHIP COUNTER ---------- */

function calculateFriendshipDays(){

    const selectedDate =
        document.getElementById("friendshipDate").value;

    if(!selectedDate){
        alert("Please choose a friendship date ❤️");
        return;
    }

    const startDate = new Date(selectedDate);
    const today = new Date();

    const diff =
        today - startDate;

    const days =
        Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );

    document.getElementById("daysResult").innerHTML =
        `❤️ Friends for <strong>${days}</strong> days`;
}

/* ---------- STORAGE ---------- */

let poems =
    JSON.parse(localStorage.getItem("poems")) || [];

let letters =
    JSON.parse(localStorage.getItem("letters")) || [];

let promises =
    JSON.parse(localStorage.getItem("promises")) || [];

let capsule =
    JSON.parse(localStorage.getItem("capsule")) || null;

/* ====================================
   POEMS
==================================== */

function addPoem(){

    const title =
        document.getElementById("poemTitle").value.trim();

    const text =
        document.getElementById("poemText").value.trim();

    if(!title || !text){
        alert("Please fill poem title and text.");
        return;
    }

    poems.push({
        title,
        text
    });

    localStorage.setItem(
        "poems",
        JSON.stringify(poems)
    );

    document.getElementById("poemTitle").value = "";
    document.getElementById("poemText").value = "";

    renderPoems();
}

function deletePoem(index){

    poems.splice(index,1);

    localStorage.setItem(
        "poems",
        JSON.stringify(poems)
    );

    renderPoems();
}

function renderPoems(){

    const container =
        document.getElementById("poemContainer");

    container.innerHTML = "";

    poems.forEach((poem,index)=>{

        container.innerHTML += `
        <div class="scrap-card">
            <h3>${poem.title}</h3>

            <p>${poem.text}</p>

            <button
            class="delete-btn"
            onclick="deletePoem(${index})">
            Delete
            </button>
        </div>
        `;
    });
}

/* ====================================
   LETTERS
==================================== */

function addLetter(){

    const title =
        document.getElementById("letterTitle").value.trim();

    const text =
        document.getElementById("letterText").value.trim();

    if(!title || !text){
        alert("Please write your letter.");
        return;
    }

    letters.push({
        title,
        text
    });

    localStorage.setItem(
        "letters",
        JSON.stringify(letters)
    );

    document.getElementById("letterTitle").value = "";
    document.getElementById("letterText").value = "";

    renderLetters();
}

function deleteLetter(index){

    letters.splice(index,1);

    localStorage.setItem(
        "letters",
        JSON.stringify(letters)
    );

    renderLetters();
}

function renderLetters(){

    const container =
        document.getElementById("letterContainer");

    container.innerHTML = "";

    letters.forEach((letter,index)=>{

        container.innerHTML += `
        <div class="scrap-card">

            <h3>${letter.title}</h3>

            <p>${letter.text}</p>

            <button
            class="delete-btn"
            onclick="deleteLetter(${index})">
            Delete
            </button>

        </div>
        `;
    });
}

/* ====================================
   PROMISES
==================================== */

function addPromise(){

    const promiseText =
        document.getElementById("promiseText")
        .value.trim();

    if(!promiseText){
        alert("Write a promise first.");
        return;
    }

    promises.push({
        text: promiseText
    });

    localStorage.setItem(
        "promises",
        JSON.stringify(promises)
    );

    document.getElementById("promiseText").value = "";

    renderPromises();
}

function deletePromise(index){

    promises.splice(index,1);

    localStorage.setItem(
        "promises",
        JSON.stringify(promises)
    );

    renderPromises();
}

function renderPromises(){

    const container =
        document.getElementById("promiseContainer");

    container.innerHTML = "";

    promises.forEach((promise,index)=>{

        container.innerHTML += `
        <div class="promise-card">

            ❤️ ${promise.text}

            <br><br>

            <button
            class="delete-btn"
            onclick="deletePromise(${index})">
            Delete
            </button>

        </div>
        `;
    });
}

/* ====================================
   TIME CAPSULE
==================================== */

function saveCapsule(){

    const message =
        document.getElementById("capsuleMessage")
        .value.trim();

    const unlockDate =
        document.getElementById("capsuleDate")
        .value;

    if(!message || !unlockDate){

        alert("Please enter message and date.");
        return;
    }

    capsule = {
        message,
        unlockDate
    };

    localStorage.setItem(
        "capsule",
        JSON.stringify(capsule)
    );

    renderCapsule();
}

function renderCapsule(){

    const display =
        document.getElementById("capsuleDisplay");

    if(!capsule){

        display.innerHTML =
            "No time capsule created yet.";
        return;
    }

    const now =
        new Date();

    const unlock =
        new Date(capsule.unlockDate);

    if(now >= unlock){

        display.innerHTML = `
        <h3>🔓 Capsule Opened</h3>
        <p>${capsule.message}</p>
        `;
    }
    else{

        display.innerHTML = `
        <h3>🔒 Capsule Locked</h3>
        <p>
        Opens on:
        ${capsule.unlockDate}
        </p>
        `;
    }
}

/* ====================================
   HEARTS EFFECT
==================================== */

function createHeart(){

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const animation =
        heart.animate([
            {
                transform:"translateY(0)",
                opacity:1
            },
            {
                transform:"translateY(-120vh)",
                opacity:0
            }
        ],
        {
            duration:7000,
            easing:"linear"
        });

    animation.onfinish = () => {
        heart.remove();
    };
}

setInterval(createHeart,2500);

/* ====================================
   INITIAL LOAD
==================================== */

renderPoems();
renderLetters();
renderPromises();
renderCapsule();
