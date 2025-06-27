import "./index.css";

const MakeMenuPage = (function() {
    const contents = document.querySelector("#contents")

    //wrapper containers
    const menuMain = document.createElement("div");
    const pizzaWrapper = document.createElement("div");
    const pastaWrapper = document.createElement("div");
    const burgerWrapper = document.createElement("div");

    menuMain.className = "menu-main"

    //main append
    menuMain.appendChild(pizzaWrapper)
    menuMain.appendChild(pastaWrapper)
    menuMain.appendChild(burgerWrapper)

    contents.appendChild(menuMain)

    return {contents}
})()

export {MakeMenuPage}