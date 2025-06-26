import "./home.css";

const MakeHomePage = (function() {
const contents = document.querySelector("#contents")

//wrapper containers
const main = document.createElement("div");
const cheese = document.createElement("div");
const cta = document.createElement("div");
const cards = document.createElement("div");
const checkMenu = document.createElement("div");
const footer = document.createElement("footer");

//wrapper classes
main.className = "main";
cheese.className = "cheese"
cta.className = "cta";
cards.className = "cards"
checkMenu.className = "check-menu"

//cta contents
const ctaPicture = document.createElement("div");
const ctaTexts =  document.createElement("div");
const ctaTitle = document.createElement("h1");
const ctaPara = document.createElement("p");
const ctaBtn = document.createElement("button")

//cta contents classes
ctaPicture.className = "cta-pic"
ctaTexts.className = "cta-texts"
ctaTitle.className = "cta-title"
ctaPara.className = "cta-para"
ctaBtn.className = "cta-btn"

//ctaTexts content
ctaTitle.textContent = "Cheesy. Saucy. Forgive Me."
ctaPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet dui. Mauris scelerisque ultricies ligula, quis porttitor elit auctor blandit. Maecenas vel felis scelerisque, gravida massa ut, rutrum risus. Aenean sagittis varius sapien, nec ornare nulla imperdiet non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet dui. Mauris scelerisque ultricies ligula, quis porttitor elit auctor blandit. Maecenas vel felis scelerisque, gravida massa ut, rutrum risus. Aenean sagittis varius sapien, nec ornare nulla imperdiet non."
ctaBtn.textContent = "Book now"

//add divs to cta
cta.appendChild(ctaPicture)
cta.appendChild(ctaTexts)

//ctaTexts add content
ctaTexts.appendChild(ctaTitle)
ctaTexts.appendChild(ctaPara)
ctaTexts.appendChild(ctaBtn)

//cards wrapper create divs
const card1 = document.createElement("div");
const card2 = document.createElement("div");
const card3 = document.createElement("div");

//card1, 2, 3 add content
const card1Title = document.createElement("h3");
const card2Title = document.createElement("h3");
const card3Title = document.createElement("h3");
const card1Pic = document.createElement("div");
const card2Pic = document.createElement("div");
const card3Pic = document.createElement("div");

//cards add class
card1.className = "card"
card2.className = "card"
card3.className = "card"
card1Pic.className = "card-pic1"
card2Pic.className = "card-pic2"
card3Pic.className = "card-pic3"

//card 1, 2, 3 fill content
card1Title.textContent = "Pizzas"
card2Title.textContent = "Pastas"
card3Title.textContent = "Burgers"

//card1, 2, 3 append
card1.appendChild(card1Title)
card1.appendChild(card1Pic)
card2.appendChild(card2Title)
card2.appendChild(card2Pic)
card3.appendChild(card3Title)
card3.appendChild(card3Pic)

//cards wrapper append card
cards.appendChild(card1)
cards.appendChild(card2)
cards.appendChild(card3)

//checkMenu content
const menuBtn = document.createElement("button")
menuBtn.className = "menu-btn"
menuBtn.textContent = "Check Menu"
checkMenu.appendChild(menuBtn)

//footer content 
const cheeseFooter = document.createElement("div")
cheeseFooter.classList = "cheese"
const copyright = document.createElement("p")
copyright.textContent = "Copyright @ 2025 Petra-78"

//footer add content
footer.appendChild(cheeseFooter)
footer.appendChild(copyright)

//wrappers add to main
main.appendChild(cta);
main.appendChild(cards);
main.appendChild(checkMenu);

contents.appendChild(cheese);
contents.appendChild(main);
contents.appendChild(footer);


return {contents, main}
})()

export {MakeHomePage}