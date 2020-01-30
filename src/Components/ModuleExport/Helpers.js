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
//creating function that will remove values from an array thats value is less then 10.
// function add(items, item) {
//   items.forEach((elm, index) => {
//     if (elm < 10) {
//       //using splice to remove elm at index
//       let underTen = items.splice(index, 1);
//     }
//   });
//   return items
// }

export { choice, remove };
