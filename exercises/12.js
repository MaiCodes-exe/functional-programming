// Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  // Only change code below this line
  // console.log(cities.splice(0,3))
  return cities.slice(0,3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);