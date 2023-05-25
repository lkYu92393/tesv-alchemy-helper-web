import { init } from "./init";

console.log("hello world");

document.addEventListener("DOMContentLoaded",() => {
    init();
});

// const selected = [];

// const filterElem = document.getElementById('filter');
// const effectElem = document.getElementById("effects");
// const selectedElem = document.getElementById("selected");
// const ingredientElem = document.getElementById("ingredientsWithEffects");

// const applyFilter = () => {
//     let filterEffects = effects;
//     if (!!filterElem.value) {
//         filterEffects = filterEffects.filter(eff => eff.toLowerCase().indexOf(elem.value.toLowerCase()) > -1)
//     }

//     if (filterEffects.length > 0) {
//         effectElem.innerHTML = filterEffects.map(effect => `<option value="${effect}">${effect}</option>`);
//     } else {
//         effectElem.innerHTML = "<option value='' disabled selected>No matches</option>"
//     }
// }

// const addEffect = () => {
//     if (selected.length >= 4 || selected.includes(effectElem.value)) {
//         return;
//     }
//     const text = effectElem.value;
//     selected.push(text);

//     repopulateEffectList();
//     repopulateSelectedList();
//     repopulateIngredientList();
// }

// const removeEffect = (effect) => {
//     selected.splice(selected.indexOf(effect), 1);

//     repopulateEffectList();
//     repopulateSelectedList();
//     repopulateIngredientList();
// }

// const repopulateEffectList = () => {}

// const repopulateSelectedList = () => {
//     selectedElem.innerHTML = selected.map(effect => `<div class="effect">${effect}<button onclick='removeEffect("${effect}");'>Remove</button></div>`).join("");
// }

// const repopulateIngredientList = () => {
//     if (selected.length  == 0) {
//         ingredientElem.innerHTML = "";
//         return;
//     }
    
//     const filterIngredients = ingredients["ingredients"].filter(ingredient => selected.reduce((accumulator, curr) => accumulator && ingredient.effects.includes(curr), true));
//     if (filterIngredients.length > 0) {
//         ingredientElem.innerHTML = filterIngredients.map(ingredient => `<li><div>${ingredient.name}</div><div>${ingredient.effects.join(", ")}</div></li>`).join("");
//     } else {
//         ingredientElem.innerHTML = "<li>No matches</li>"
//     }
// }

// document.addEventListener("DOMContentLoaded",() => {
//     effectElem.innerHTML = effects.map(effect => `<option value="${effect}">${effect}</option>`);
// });