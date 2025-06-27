  import "./index.css";
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

    contactHeader.textContent = "Contact Us"
    contactPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet dui. Mauris scelerisque ultricies ligula, quis porttitor elit auctor blandit. Maecenas vel felis scelerisque, gravida massa ut, rutrum risus. Aenean sagittis varius sapien, nec ornare nulla imperdiet non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet dui. Mauris scelerisque ultricies ligula, quis porttitor elit auctor blandit. Maecenas vel felis scelerisque, gravida massa ut, rutrum risus. Aenean sagittis varius sapien, nec ornare nulla imperdiet non."

    //contactForm content
    const form = document.createElement("form")

    const firstNL = document.createElement("label")
    const lastNL = document.createElement("label")
    const emailL = document.createElement("label")
    const messageL = document.createElement("label")

    
    const lastNI = document.createElement("input")
    const firstNI = document.createElement("input")
    const emailI = document.createElement("input")
    const messageI = document.createElement("textarea")
    const submitBtn = document.createElement("button")
    submitBtn.className = "submit"
    submitBtn.textContent = "Submit"
    
    //label setters
    firstNL.setAttribute("for", "first-name")
    lastNL.setAttribute("for", "last-name")
    emailL.setAttribute("for", "email")
    messageL.setAttribute("for", "message")
    
    //labels textcontent
    firstNL.textContent = "First Name"
    lastNL.textContent = "Last Name"
    emailL.textContent = "Email"
    messageL.textContent = "Message"

    //input id and type setters
    firstNI.id = "first-name"
    lastNL.id = "last-name"
    emailL.id = "email"
    messageL.id = "message"

    firstNI.type = "text"
    lastNI.type = "text"
    emailI.type = "email"

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
    form.appendChild(emailL)
    form.appendChild(emailI)
    form.appendChild(messageL)
    form.appendChild(messageI)
    form.appendChild(submitBtn)


    contents.appendChild(contactMain);

    return {contents, contactMain}
  })()

  export {MakeContactPage}