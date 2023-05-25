import { ingredientBrowserInit } from "./module/ingredientBrowser";

const logoDiv = `<div class="logo">
<img src="https://www.seekpng.com/png/full/143-1437955_skyrim-logo-elder-scrolls-symbol.png" />
</div>`;

const init = () => {
    const divElem = document.getElementById("content");

    divElem.innerHTML = `
    <div id="container">
        ${logoDiv}
        <section id="ingredient"></section>
    </div>
    `

    ingredientBrowserInit();
}

export { init };