  import "./contact.css";
  const MakeContactPage = (function() {
    const contents = document.querySelector("#contents")

    //wrapper container
    const contactMain = document.createElement("div");
    const wrapper = document.createElement("div");

    //wrapper classes
    contactMain.className = "contact-main";
    wrapper.className = "wrapper"

    //2 divs in main
    const contactTexts = document.createElement("div");
    const contactForm = document.createElement("div");

    contactTexts.className = "contact-texts"
    contactForm.className = "contact-form"
    
    //contactTexts content
    const contactHeader = document.createElement("h1")
    const contactPara = document.createElement("p")

    //contactForm content
    const form = document.createElement("form")

    const firstNL = document.createElement("label")
    const firstNI = document.createElement("input")

    const lastNL = document.createElement("label")
    const lastNI = document.createElement("input")
    
    //label setters
    firstNL.setAttribute("for", "first-name")
    
    //input id and type setters
    firstNI.id = "first-name"
    firstNI.type = "text"

    //appending
    contactMain.appendChild(wrapper)
    wrapper.appendChild(contactTexts)
    wrapper.appendChild(contactForm)
    contactTexts.appendChild(contactHeader)
    contactTexts.appendChild(contactPara)

    contactForm.appendChild(form)
    form.appendChild(firstNL)
    form.appendChild(firstNI)
    form.appendChild(lastNL)
    form.appendChild(lastNI)

    contents.appendChild(contactMain);

    return {contents, contactMain}
  })()

  export {MakeContactPage}