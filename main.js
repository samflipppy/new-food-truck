var foodTrucks = [
  { name: "Tasty Treats", cuisine: "Ice Cream", location: "Downtown" },
  { name: "Sizzling Eats", cuisine: "BBQ", location: "Uptown" },
  { name: "Veggie Delight", cuisine: "Vegan", location: "Midtown" }
];

var foodTruckList = document.getElementById("food-truck-list");

if (foodTruckList) {
  for (var i = 0; i < foodTrucks.length; i++) {
    var foodTruck = foodTrucks[i];
    var foodTruckDiv = document.createElement("div");
    foodTruckDiv.innerHTML = `
      <h2>${foodTruck.name}</h2>
      <p>Cuisine: ${foodTruck.cuisine}</p>
      <p>Location: ${foodTruck.location}</p>
    `;
    foodTruckList.appendChild(foodTruckDiv);
  }
}