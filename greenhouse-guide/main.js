import plants from "./plants.mjs";

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function getRandomPlant() {
  const randomIndex = randomNum(plants.length);
  return plants[randomIndex];
}

function plantTemplate(plant) {
    return `<section class="plant-image">
              <img src="${plant.image}" alt="image of ${plant.name}">
            <section class="plant-info">
              <h2 class="plant-title">${plant.name}</h2>
              <p><strong>Color:</strong> ${plant.color}</p>
              <p><strong>Watering:</strong> ${plant.watering}</p>
              <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
              <p><strong>Zone:</strong> ${plant.zone}</p>
              <p><strong>Height:</strong> ${plant.height}</p>
              <p><strong>Spread:</strong> ${plant.spread}</p>
              <p><strong>Deer Resistance:</strong> ${plant.deer_resistance}</p>
            </section>
        </section>`;
}

function renderPlants(plantList) {
  const plantContainer = document.querySelector(".plant-card");
  const plantHTML = plantList.map((plant) => plantTemplate(plant)).join("");
  plantContainer.innerHTML = plantHTML;
}

function init() {
  const randomPlant = getRandomPlant();
  renderPlants([randomPlant]);

  const searchInput = document.querySelector(".search")
  searchInput.addEventListener("submit", searchHandler);
}

function filter(query) {
  const filtered = plants.filter(plant => {
      return (
          plant.name.toLowerCase().includes(query) ||   
          plant.color.toLowerCase().includes(query) ||
          plant.watering.toLowerCase().includes(query) ||
          plant.sunlight.toLowerCase().includes(query) ||   
          plant.zone.toLowerCase().includes(query) ||
          plant.height.toLowerCase().includes(query) ||
          plant.spread.toLowerCase().includes(query) ||
          plant.deer_resistance.toLowerCase().includes(query) ||
          plant.image.toLowerCase().includes(query)
      );
  });

  const sorted = filtered.sort();
  
  return sorted;

}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.querySelector("#search-bar").value;
  const query = searchInput.toLowerCase();
  const filteredPlants = filter(query);
  renderPlants(filteredPlants);
}


document.addEventListener("DOMContentLoaded", init);

const themeSelector = document.querySelector("#theme");
function changeTheme() {
    const current_theme = themeSelector.value;

    if (current_theme == "dark")
    {
        document.body.classList.add("dark");
    }
    else
    {
        document.body.classList.remove("dark");
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();