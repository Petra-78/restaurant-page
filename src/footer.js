import "./index.css"
const MakeFooter = (function() {
    const contents = document.querySelector("#contents")
    const footer = document.createElement("footer");

    //footer content 
    const cheeseFooter = document.createElement("div")
    cheeseFooter.classList = "cheese"
    const copyright = document.createElement("p")
    copyright.textContent = "Copyright @ 2025 Petra-78"

    //footer add content
    footer.appendChild(cheeseFooter)
    footer.appendChild(copyright)

    contents.appendChild(footer);

    return {contents, footer}
})()

export {MakeFooter}