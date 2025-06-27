
import { MakeHomePage } from "./home";
import { MakeContactPage } from "./contact";
import { MakeMenuPage } from "./menu";
import { MakeFooter } from "./footer";

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu")
const contactBtn = document.querySelector(".contact")

homeBtn.addEventListener("click", () => {
    MakeHomePage.main.style.display = "flex"
    MakeContactPage.contactMain.style.display = "none"
    MakeMenuPage.menuMain.style.display = "none"
})

contactBtn.addEventListener("click", () => {
    MakeContactPage.contactMain.style.display = "flex"
    MakeHomePage.main.style.display = "none"
    MakeMenuPage.menuMain.style.display = "none"
})

menuBtn.addEventListener("click", () => {
    MakeMenuPage.menuMain.style.display = "flex"
    MakeContactPage.contactMain.style.display = "none"
    MakeHomePage.main.style.display = "none"
})

    MakeFooter.footer.style.display = "flex"
