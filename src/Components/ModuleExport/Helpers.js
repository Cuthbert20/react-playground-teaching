//creating functions to export and manipulate foods array from foods.js
function choice(items) {
  let indx = Math.floor(Math.random() * items.length);
  return items[indx];
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (item[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
