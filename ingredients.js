const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.Length ) {
   let val = array[i];
   i++;
}
console.log(ingredients)

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i <=8; i++) {
  console.log(ingredients[i]);
}
console.log(ingredients)

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let i = ingredients.length - 1; i >= 0; i -= 1) {
  console.log(`${ingredients[i]}`);
}
