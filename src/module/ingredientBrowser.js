import { ingredients } from "../constants/ingredients";

const ingredientsName = Object.keys(ingredients);
let filteredIngredientsName = ingredientsName;

const ingredientBrowserElem = () => {
    document.getElementById("ingredient").innerHTML = `
    <div class="square-two">
        <label>Ingredient Filter:</label>
        <input id="ingredient-filter" />
        <div></div>
        <select id="ingredient-list"></select>
    </div>
    <div id="ingredient-effect" class="square-two"></div>
    `
}

const filterIngredients = (text) => {
    if (!text) {
        filteredIngredientsName = ingredientsName;
    } else {
        filteredIngredientsName = ingredientsName.filter(name => name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
}

const repopulateIngredientSelect = () => {
    const targetElem = document.getElementById("ingredient-list");
    if (filteredIngredientsName.length > 0) {
        targetElem.innerHTML = filteredIngredientsName.map(name => `<option value="${name}">${name}</option>`);
        retrieveEffects(targetElem.value);
    } else {
        targetElem.innerHTML = "<option value='' disabled selected>No matches</option>"
    }
}

const retrieveEffects = (text) => {
    const targetDiv = document.getElementById("ingredient-effect");
    targetDiv.innerHTML = ingredients[text].map(effect => `<div class="effect">${effect}</div>`).join("");
};

const ingredientBrowserElemEventHandler = () => {
    document.getElementById("ingredient-filter").addEventListener("input", (event) => {
        filterIngredients(event.target.value);
        repopulateIngredientSelect();
    })
    document.getElementById("ingredient-list").addEventListener("change", (event) => {
        retrieveEffects(event.target.value);
    })
}

const ingredientBrowserInit = () => {
    ingredientBrowserElem();
    repopulateIngredientSelect();
    ingredientBrowserElemEventHandler();
}

export default ingredientBrowserInit;