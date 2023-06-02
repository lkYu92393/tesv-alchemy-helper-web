import ingredientBrowserInit from "./module/ingredientBrowser";
import effectBrowserInit from "./module/effectBrowser";

const logoDiv = `<div class="logo"><img src="https://www.seekpng.com/png/full/143-1437955_skyrim-logo-elder-scrolls-symbol.png" /></div>`;

document.addEventListener("DOMContentLoaded",() => {
    const divElem = document.getElementById("content");

    divElem.innerHTML = 
        '<div id="container">' + logoDiv + '<section id="ingredient"></section>' +
        '<section id="effect-filter"></section><section id="select-effect"></section>' + 
        '<section id="possible-ingredient"></section></div>';

    ingredientBrowserInit();
    effectBrowserInit();
});