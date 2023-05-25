import { effects, ingredientsData } from "../constants/ingredients";

let filteredEffects = effects;
const selected = [];

const effectBrowserElem = () => {
    document.getElementById("effect-filter").innerHTML = `
    Filter:
    <input id="filter" />
    <select id="effects">
    </select>
    <button id="effect-button">Add</button>
    `
    document.getElementById("select-effect").innerHTML = `
    <div>
        Selected Effect:
    </div>
    <div id="selected" class="square-two">
    </div>
    `
    document.getElementById("possible-ingredient").innerHTML = `
    Possible Ingredients:
    <ul id="ingredientsWithEffects">

    </ul>
    `
}

const filterEffects = (text) => {
    filteredEffects = !test ? effects : effects.filter(name => name.toLowerCase().indexOf(text.toLowerCase()) > -1)
}

const repopulateEffectSelect = () => {
    const targetElem = document.getElementById("effects");
    if (filterEffects.length > 0) {
        targetElem.innerHTML = filteredEffects.map(effect => `<option value="${effect}">${effect}</option>`);
    } else {
        targetElem.innerHTML = "<option value='' disabled selected>No matches</option>"
    }
}

const repopulateSelectedList = () => {
    document.getElementById("selected").innerHTML = selected.map(effect => 
        `<div class="effect">${effect}<button name="${effect}">Remove</button></div>`).join("");

    Array.from(document.querySelectorAll("div.effect>button")).forEach(button => {
        button.addEventListener("click", removeEffect)
    })
}

const repopulateIngredientList = () => {
    const ingredientElem = document.getElementById("ingredientsWithEffects");
    if (selected.length  == 0) {
        ingredientElem.innerHTML = "";
        return;
    }
    
    const filterIngredients = ingredientsData["ingredients"].filter(ingredient => selected.reduce((accumulator, curr) => accumulator && ingredient.effects.includes(curr), true));
    if (filterIngredients.length > 0) {
        ingredientElem.innerHTML = filterIngredients.map(ingredient => `<li><div>${ingredient.name}</div><div>${ingredient.effects.join(", ")}</div></li>`).join("");
    } else {
        ingredientElem.innerHTML = "<li>No matches</li>"
    }
}

const removeEffect = (event) => {
    const effect = event.target.name;
    selected.splice(selected.indexOf(effect), 1);

    repopulateSelectedList();
    repopulateIngredientList();
}

const effectBrowserEventHandler = () => {
    document.getElementById("filter").addEventListener("input", (event) => {
        filterEffects(event.target.value);
        repopulateEffectSelect();
    });
    document.getElementById("effect-button").addEventListener("click", () => {
        const effectElem = document.getElementById("effects");
        if (selected.length >= 4 || selected.includes(effectElem.value)) {
            return;
        }
        const text = effectElem.value;
        selected.push(text);

        repopulateSelectedList();
        repopulateIngredientList();
    });
}

const effectBrowserInit = () => {
    effectBrowserElem();
    effectBrowserEventHandler();
    repopulateEffectSelect();
}

export default effectBrowserInit;