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

    //pizzaWrapper contents
    const titlePizza = document.createElement("h2")
    titlePizza.textContent = "Pizzas"

    const pizzaGrid = document.createElement("div")
    pizzaGrid.className = "grid"

    //pizzaWrapper append
    pizzaWrapper.appendChild(titlePizza)
    pizzaWrapper.appendChild(pizzaGrid)

    //pizzaGrid contents
    const pizzaCardData = [
        { title: "The Father’s Favourite", description: "Classic pepperoni. What else would you need?" },
        { title: "Crusty and mighty", description: "Garlic crust, herbed base, mozzarella for good taste." },
        { title: "Purgatory", description: "Spicy, deadly, in case you haven't suffered in a while." },
        { title: "Cheesus Crust", description: "A true signature you can't miss." },
        { title: "Holy Pepperoni", description: "A double portion. For when you are feeling needy." },
        { title: "Blessed Quartet", description: "Four cheeses. Four heavens." }
    ];

    pizzaCardData.forEach((item, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const pic = document.createElement("div");
    pic.classList.add("card-pic", `pizza-pic${i + 1}`); // So you can assign background images with CSS

    const title = document.createElement("h3");
    title.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;

    card.appendChild(pic);
    card.appendChild(title);
    card.appendChild(paragraph);

    pizzaGrid.appendChild(card);
    });


    //pastaWrapper contents 
    const titlePasta = document.createElement("h2")
    titlePasta.textContent = "Pastas"

    const pastaGrid = document.createElement("div")
    pastaGrid.className = "grid"
    
    //pastawrapper append
    pastaWrapper.appendChild(titlePasta)
    pastaWrapper.appendChild(pastaGrid)

    //pastaGrid contents
    const pastaCardData = [
        { title: "OnlyPasta", description: "Extra creamy carbonara to match your taste." },
        { title: "Send Noodls", description: "Simple penne with hearty red sauce and parmesan." },
        { title: "Cheesus, take the pan", description: "You’ll know it when you taste it." },
        { title: "Holy Shells", description: "In case you like it fishy." },
    ];

    pastaCardData.forEach((item, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const pic = document.createElement("div");
    pic.classList.add("card-pic", `pasta-pic${i + 1}`); // So you can assign background images with CSS

    const title = document.createElement("h3");
    title.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;

    card.appendChild(pic);
    card.appendChild(title);
    card.appendChild(paragraph);

    pastaGrid.appendChild(card);
    });

    //burgerWrapper contents
    const titleBurger = document.createElement("h2")
    titleBurger.textContent = "Burgers"

    const burgerGrid = document.createElement("div")
    burgerGrid.className = "grid"
    
    //burgerWrapper append
    burgerWrapper.appendChild(titleBurger)
    burgerWrapper.appendChild(burgerGrid)

    //burgerGrid contents
    const burgerCardData = [
        { title: "Stack & Deliver", description: "Two patties, house sauce. Delivers every time." },
        { title: "Meat Me at Midnight", description: "Charred, cheesy, probably regrettable. Worth it." },
        { title: "Between Two Buns", description: "Naming it anything else would be dishonest." },
        { title: "Cheesus Stack", description: "Classic cheese, nothing to rock your world" },
        { title: "Unholy", description: "Burnt in flames. Served with fries." },
        { title: "Shroom for More", description: "Weird choice but impactful." },
    ];

    burgerCardData.forEach((item, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const pic = document.createElement("div");
    pic.classList.add("card-pic", `burger-pic${i + 1}`); // So you can assign background images with CSS

    const title = document.createElement("h3");
    title.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;

    card.appendChild(pic);
    card.appendChild(title);
    card.appendChild(paragraph);

    burgerGrid.appendChild(card);
    });


    contents.appendChild(menuMain)

    return {contents, menuMain}
})()

export {MakeMenuPage}