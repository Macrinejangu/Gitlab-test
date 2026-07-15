/*
Update DOM Elements
innerHtml - Replaces the html file
innerText - Replaces the Inner Text
1. Buttons
1. Original content
2. Updating content
3. update the innerText
*/

const otherAppliances = ["Kettle", "Toaster", "Blender"];
const originalDiv = document.querySelector("#div1").innerHTML;

function original() {
  console.log("original clicked");
  document.querySelector("#div1").innerHTML = originalDiv;
}

function replace() {
  console.log("replace clicked");
  const newHtml = `
    <h3>List Chores</h3>
      <ul>
        <li class="list-item">Clean Bathroom</li>
        <li class="list-item">Clean Kitchen</li>
        <li class="list-item">Fetch Water</li>
      </ul>
  `;
  document.querySelector("#div1").innerHTML = newHtml;
}

function updateAppliances() {
  console.log("update appliances clicked");
  const allItems = document.querySelectorAll(".Appliance");
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].innerText = otherAppliances[i];
  }
}