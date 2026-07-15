// 1. getElementById
const divById = document.getElementById("div1");
console.log(divById);

// 2. getElementsByClassName
const itemsByClass = document.getElementsByClassName("Appliance");
console.log(itemsByClass);

// 3. querySelector
// 3.1 by id
const divByQuery = document.querySelector("#div1");
console.log(divByQuery);

// 3.2 by class (first match only)
const firstItemByQuery = document.querySelector(".Appliance");
console.log(firstItemByQuery);

// 3.3 querySelectorAll (returns a NodeList/array of all matches)
const allItemsByQuery = document.querySelectorAll(".Appliance");
console.log(allItemsByQuery);

for (const item of allItemsByQuery) {
  console.log(item);
}