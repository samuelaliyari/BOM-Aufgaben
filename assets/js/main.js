// ================================================
//              CodeFlow Übung lev1_1
// ================================================
console.log(" %c CodeFlow Übung lev1_1", "color: lightblue; font-size: 12px;");

console.log("Warte für 5 Sekunden")
setTimeout(() => {
    console.log("Prima! Du hast sehr gut gewartet");
    console.log("in 10 Sekunden ist Feierabend");
    let i = 10;
    const feierabendInterval = setInterval(() => {
        if (i > 0 ) {
            console.log(i--)
        } else if (i === 0){
            console.log("Endlich Feierabend!")
            clearInterval(feierabendInterval)
        }
    }, 1000);
}, 5000);

// ================================================
//              CodeFlow Übung lev1_2
// ================================================
console.log(" %c CodeFlow Übung lev1_2", "color: lightblue; font-size: 12px;");

const zeit = document.body.querySelector(".zeit")
const btn = document.body.querySelector("#btn")


btn.addEventListener("click", () => {
    let num = 100
const countToNull = setInterval(() => {
    if (num >= 0) {
        zeit.textContent = num + "%"
        num--
    } else {
        clearInterval(countToNull)
    }
}, 100)
})


// ================================================
//              CodeFlow Übung lev2_1
// ================================================
console.log(" %c CodeFlow Übung lev2_1", "color: lightblue; font-size: 12px;");

const message = document.body.querySelector(".message");
const count = document.body.querySelector("#count")
console.log(message)

const deleteMessage = setInterval(() => {
    let num = Number(count.textContent)
    if (num > 0) {
        num--
        count.textContent = num;
    } else {
        clearInterval(deleteMessage);
        message.style.opacity = 0
    }
}, 1000);


