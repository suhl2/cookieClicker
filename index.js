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
//Get producer divs
const garlandDiv = document.getElementById("garland-div");
const candyCaneDiv = document.getElementById("candy-cane-div");

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

//garland producer

const garlandButton = document.getElementById("garland");
const garlandOwnedText = document.getElementById("garland-owned");
const garlandCostText = document.getElementById("garland-cost");
const garlandGenerateText = document.getElementById("garland-generate");
let garlandOwned = 0;
const buyGarland = () => {
    if (presents >= producers[1]["cost"]) {
        presents -= producers[1]["cost"];
        producers[1]["cost"] += producers[1]["presentIncrease"];
        garlandOwned++
        presentsPerSecond += 5;
        garlandOwnedText.innerText = `Owned: ${garlandOwned}`;
        garlandCostText.innerText = `Cost: ${producers[1]["cost"]} presents`;
        presentText.innerText = `Presents: ${presents}`;
    }
}
garlandButton.addEventListener("click", buyGarland);

//candy cane producer
const candyCaneButton = document.getElementById("candy-canes");
const candyCanesOwnedText = document.getElementById("candy-canes-owned");
const candyCanesCostText = document.getElementById("candy-canes-cost");
const candyCanesGenerateText = document.getElementById("candy-canes-generate");
let candyCanesOwned = 0;
const buyCandyCanes = () => {
    if (presents >= producers[2]["cost"]) {
        presents -= producers[2]["cost"];
        producers[2]["cost"] += producers[2]["presentIncrease"];
        candyCanesOwned++;
        presentsPerSecond += 10;
        candyCanesOwnedText.innerText = `Owned: ${candyCanesOwned}`;
        candyCanesCostText.innerText = `Cost: ${producers[2]["cost"]} presents`;
        presentText.innerText = `Presents: ${presents}`;
    }
} 

candyCaneButton.addEventListener("click", buyCandyCanes);

//increment presents once per second
const presentsPerSecondText = document.getElementById("presents-per-second");
const perSecond = () => {
    presents += presentsPerSecond;
    console.log(presents);
    presentsPerSecondText.innerText = `${presentsPerSecond} presents/second`; 
    presentText.innerText = `Presents: ${presents}`;  
    if (presents > 30) {
        garlandDiv.style.display = "block";
    }
    if (presents > 80) {
        candyCaneDiv.style.display = "block";
    }
}
setInterval(perSecond, 1000);
