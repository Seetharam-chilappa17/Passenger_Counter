let count = 0;

function incrementCount() {
  count++;
  updateCount();
}

function saveCount() {
  const entries = document.getElementById("entries");
  const entryItem = document.createElement("span");
  entryItem.className = "entry";
  entryItem.textContent = `${count} - `;
  entries.appendChild(entryItem);
}

function updateCount() {
  const countElement = document.querySelector(".count");
  countElement.textContent = count;
}

updateCount();
