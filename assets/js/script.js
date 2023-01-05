
var canadianFoodBtn = document.querySelector('#canadian-filter');
var frenchFoodBtn = document.querySelector('#french-filter');
var italianFoodBtn = document.querySelector('#italian-filter');
var chickenCatBtn = document.querySelector('#chicken-filter');
var seafoodCatBtn = document.querySelector('#seafood-filter');
var pastaCatBtn = document.querySelector('#pasta-filter');
var dessertCatBtn = document.querySelector('#dessert-filter');
var alcoholicBtn = document.querySelector('#alcoholic-filter');
var nonAlcoholicBtn = document.querySelector('#noAlcohol-filter');
var cocktailBtn = document.querySelector('#cocktail-filter');
var ordinaryDrinkBtn = document.querySelector('#ordinary-filter');
var favouritesBtn = document.querySelector('#favourites-btn');

var cardContainer = document.getElementById('card-container')
var cardContainer2 = document.getElementById('card-container-2')


let Random = `randomselection.php`
// Country
let Canadian = 'filter.php?a=Canadian'
let Italian = 'filter.php?a=Italian'
let French = 'filter.php?a=French'

// Category
let Seafood = 'filter.php?c=Seafood'
let Chicken = 'filter.php?c=Chicken'
let Pasta = 'filter.php?c=Pasta'
let Dessert = 'filter.php?c=Dessert'

// Alcohol
let Alcoholic = 'filter.php?a=Alcoholic'
let nonAlcholic = 'filter.php?a=Non_Alcoholic'
// Glass Type
let cocktailGlass = 'filter.php?g=Cocktail_glass'
let champagneFlute = 'filter.php?g=Champagne_flute'
// API URL's
var foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Random}`
var cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/${Random}`


fetch(cocktailApiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayDrinks(data)
      console.log("Drinks API");
      console.log(data);
        
    });
  } else { 
    alert('Error: ' + response.statusText);
  }
});


fetch(foodApiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayMeals(data)
        
    });
  } else { 
    alert('Error: ' + response.statusText);
  }
});



function displayDrinks(instructions) {

  clearDiv2();

  console.log(instructions)
  
  for(var j = 0; j < 8; j++){
    var cardBodyDivEl = document.createElement('div');
    var cardTitleEl = document.createElement('h5');
    var colDivEl = document.createElement('div');
    var cardDivEl = document.createElement('div');
    var cardImg = document.createElement('img');

    colDivEl.setAttribute('class', 'col');
    cardDivEl.setAttribute('class', 'card');
    cardBodyDivEl.setAttribute('class', 'card-body');
    cardTitleEl.setAttribute('class', 'card-title');


    cardImg.src = instructions.drinks[j].strDrinkThumb;
    cardTitleEl.textContent = instructions.drinks[j].strDrink;

    
    cardContainer2.appendChild(colDivEl)
    colDivEl.appendChild(cardDivEl)
    cardDivEl.appendChild(cardImg)
    cardDivEl.appendChild(cardBodyDivEl)
    cardBodyDivEl.appendChild(cardTitleEl)


  }
}

function displayMeals(recipies) {

  clearDiv();
  console.log(recipies)
  
  for(var i = 0; i < 8; i++){
    var cardBodyDivEl = document.createElement('div');
    var cardTitleEl = document.createElement('h5');
    var colDivEl = document.createElement('div');
    var cardDivEl = document.createElement('div');
    var cardImg = document.createElement('img');

    colDivEl.setAttribute('class', 'col');
    cardDivEl.setAttribute('class', 'card');
    cardBodyDivEl.setAttribute('class', 'card-body');
    cardTitleEl.setAttribute('class', 'card-title');


    cardImg.src = recipies.meals[i].strMealThumb;
    cardTitleEl.textContent = recipies.meals[i].strMeal;

    
    cardContainer.appendChild(colDivEl)
    colDivEl.appendChild(cardDivEl)
    cardDivEl.appendChild(cardImg)
    cardDivEl.appendChild(cardBodyDivEl)
    cardBodyDivEl.appendChild(cardTitleEl)

  }
}

// Add click listeners for the nav bar  refinement options and favourite button
canadianFoodBtn.addEventListener ("click", onlyCanadianFood );
frenchFoodBtn.addEventListener ("click", onlyFrenchFood );
italianFoodBtn.addEventListener ("click", onlyItalianFood );

chickenCatBtn.addEventListener ("click", onlyChickenFood );
seafoodCatBtn.addEventListener ("click", onlySeafood  );
pastaCatBtn.addEventListener ("click", onlyPastas);
dessertCatBtn.addEventListener ("click", onlyDesserts);

alcoholicBtn.addEventListener ("click", onlyAlcohols);
nonAlcoholicBtn.addEventListener ("click", noAlcohols);

cocktailBtn.addEventListener ("click", onlyCocktails);
ordinaryDrinkBtn.addEventListener ("click", onlyOrdinaryDrinks);



// Create a function that will dynamically refine the list of dispalyed based on the origin/area
function onlyCanadianFood(recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Canadian}`

  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyFrenchFood(recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${French}`

  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyItalianFood(recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Italian}`

  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyChickenFood(recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Chicken}`

  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}


function onlySeafood (recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Seafood}`



  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyPastas (recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Pasta}`



  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyDesserts (recipies) {

  foodApiUrl = `https://www.themealdb.com/api/json/v2/9973533/${Dessert}`



  fetch(foodApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayMeals(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display meals function
    console.log("recepies after event click:");
    console.log(recipies);
    displayMeals(recipies);
}

function onlyAlcohols (instructions) {
  cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/${Alcoholic}`

  fetch(cocktailApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayDrinks(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display drinks function
    console.log("Instructions after event click:");
    console.log(instructions);
    displayDrinks(instructions);
}

function noAlcohols (instructions) {
  cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/${nonAlcholic}`

  fetch(cocktailApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayDrinks(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display drinks function
    console.log("Instructions after event click:");
    console.log(instructions);
    displayDrinks(instructions);
}

function onlyCocktails (instructions) {
  cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/${cocktailGlass}`

  fetch(cocktailApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayDrinks(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display drinks function
    console.log("Instructions after event click:");
    console.log(instructions);
    displayDrinks(instructions);
}

function onlyOrdinaryDrinks (instructions) {
  cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/${champagneFlute}`

  fetch(cocktailApiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayDrinks(data)
          console.log("data after event click:");
          console.log(data);
          
        });
      } else { 
        alert('Error: ' + response.statusText);
      }
    });
    // call display drinks function
    console.log("Instructions after event click:");
    console.log(instructions);
    displayDrinks(instructions);
}


// This function will display the list of favourited recipes stored in local storage
function displayFavorites () {
    console.log("Favorites was clicked");
}

// Clear div for food cards
function clearDiv () {
  cardContainer.textContent = "";
}

// Clear div for drink cards
function clearDiv2 () {
  cardContainer2.textContent = "";
}
