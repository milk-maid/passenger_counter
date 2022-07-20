// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")
// document.getElementById("count").innerHTML = 58;

// let frank = 2;
// let molly = 55;
// let all = molly + frank;
// console.log(all)

// let myAge = 27;
// let humanDogRatio = 7;
// const myDogAge = myAge * humanDogRatio ;
// console.log(myDogAge)

// let bonusPoints;
// bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }



// countdown();

// function dimension() {
//     console.log(42)
// }

// dimension();


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 38;

// function lapSum(a, b, c) {
//     sum = a + b + c;
//     console.log(sum)
// }

// lapSum(3, 33, 333);

// function addLaps() {
//     let totalLapTime = lap1 + lap2 + lap3;
//     console.log(totalLapTime)
// }

// addLaps();


// let lapsCompleted = 0;
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
//     //console.log(lapsCompleted++)
// }

// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted)

// document.getElementById("count-el").innerText = 8;


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

console.log(countEl)

function increment() {
    count += 1;
    countEl.textContent = count;
}

// document.getElementById("count").innerHTML = increment();

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let theString = count + " - ";
    saveEl.textContent += theString;
    countEl.textContent = 0;
    count = 0;

}

save()

