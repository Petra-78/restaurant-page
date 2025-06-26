
import { MakeHomePage } from "./home";
import { MakeContactPage } from "./contact";
import { MakeFooter } from "./footer";

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu")
const contactBtn = document.querySelector(".contact")

homeBtn.addEventListener("click", () => {
    MakeHomePage.main.style.display = "flex"
    MakeFooter.footer.style.display = "flex"
    MakeContactPage.contactMain.style.display = "none"
})

contactBtn.addEventListener("click", () => {
    MakeContactPage.contactMain.style.display = "flex"
    MakeFooter.footer.style.display = "flex"
    MakeHomePage.main.style.display = "none"
})
