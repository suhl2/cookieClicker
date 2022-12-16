// keep track of amount of presents
// Clicking buy adds a producer, increases the amount of presents per second, and decreases presents by producer cost
// clicking on tree adds one present
// once a producer is bought, presents produce automatically every second

//Trackers
let presents = 0;
let presentsPerSecond = 0;

//Clicking on tree generates one present
const tree = document.getElementById("tree");
const presentText = document.getElementById("present-count");
const addPresentOnClick = () => {
    presents++;
    presentText.innerText =`Presents: ${presents}`;
}
tree.addEventListener("click", addPresentOnClick);
