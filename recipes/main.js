import recipes from "./recipes.mjs";

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function getRandomRecipe() {
  const randomIndex = randomNum(recipes.length);
  return recipes[randomIndex];
}

function recipeTemplate(recipe) {
	return `<section class="recipe-image">
            <img src="${recipe.image}" alt="image of ${recipe.name}">
        </section>
        <section class="recipe-info">
            <div class="tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <h2 class="recipe-title">${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                ${ratingTemplate(recipe.rating)}
            </span>
            <p class="description">${recipe.description}</p>
        </section>`;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector(".recipe-card");
    const recipeHTML = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
    recipeContainer.innerHTML = recipeHTML;
}

function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);

    const searchInput = document.querySelector(".search")
    searchInput.addEventListener("submit", searchHandler);
}



function filter(query) {
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||   
            recipe.description.toLowerCase().includes(query) ||
            (recipe.tags.find((tag) => tag.toLowerCase().includes(query))) ||
            (recipe.recipeIngredient.find((recipeIngredient) => recipeIngredient.toLowerCase().includes(query)))
        );
    });

    const sorted = filtered.sort();
    
    return sorted;

}

function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector("#search-bar").value;
    const query = searchInput.toLowerCase();
    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes);
}

init();