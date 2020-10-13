const temperature = -40;
let raining = false

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (!raining) {
    console.log("Leave your umbrella at home!");
  } 
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
