// keep track of amount of presents
// Clicking buy adds a producer, increases the amount of presents per second, and decreases presents by producer cost
// clicking on tree adds one present
// once a producer is bought, presents produce automatically every second

//Trackers
let presents = 0;
let presentsPerSecond = 0;
let producers = [
    {kind: "ornament", cost: 10, increment: 5, presentIncrease: 1},
    {kind: "garland", cost: 50, increment: 20, presentIncrease: 5},
    {kind: "candy-cane", cost: 100, increment: 50, presentIncrease: 10},
    {kind: "star", cost: 5000}
]


//Clicking on tree generates one present
const tree = document.getElementById("tree");
const presentText = document.getElementById("present-count");
const addPresentOnClick = () => {
    presents++;
    presentText.innerText =`Presents: ${presents}`;
}
tree.addEventListener("click", addPresentOnClick);

//Buying a producer increments coffee/second
//start with ornament
const ornamentsButton = document.getElementById("ornaments");
const ornamentsOwnedText = document.getElementById("ornaments-owned");
const ornamentsCostText = document.getElementById("ornaments-cost");
const ornamentsGenerateText = document.getElementById("ornaments-generate");
console.log(ornamentsOwnedText);
let ornamentsOwned = 0;
const buyOrnaments = () => {
    if (presents >= producers[0]["cost"]){
    presents -= producers[0]["cost"];
    producers[0]["cost"] += producers[0]["presentIncrease"];
    ornamentsOwned++;
    presentsPerSecond += 1;
    ornamentsOwnedText.innerText = `Owned: ${ornamentsOwned}`;
    ornamentsCostText.innerText = `Cost: ${producers[0]["cost"]} presents`;
    presentText.innerText = `Presents: ${presents}`;
    }
}
ornamentsButton.addEventListener("click", buyOrnaments);

//increment presents once per second
const presentsPerSecondText = document.getElementById("presents-per-second");
const perSecond = () => {
    presents += presentsPerSecond;
    console.log(presents);
    presentsPerSecondText.innerText = `${presentsPerSecond} presents/second`; 
    presentText.innerText = `Presents: ${presents}`;  
}
setInterval(perSecond, 1000);
