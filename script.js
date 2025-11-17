const body = document.querySelector("body");
const citationInput = document.getElementById("citation_input");
const authorInput = document.getElementById("author_input");
const submit = document.getElementById("submitAction");
const form = document.querySelector("form");

function addQuote(quote, author) {

    // 1. Création de nouvelle citation avec l'auteur
    const textP = document.createElement("p");
    const innerText = document.createTextNode(quote);
    textP.setAttribute("class", "text");
    textP.appendChild(innerText);
    const authorP = document.createElement("p");
    const innerAuthorName = document.createTextNode(author);
    authorP.setAttribute("class", "author");
    authorP.appendChild(innerAuthorName);
    
    // 2. Insertion de la nouvelle création dans un container 
    const quoteContainer = document.createElement("div");
    quoteContainer.appendChild(textP);
    quoteContainer.appendChild(authorP);
    
    // 3. Insertion de ce nouveau container dans le dom dans dans "quote-list" 
    const quoteListContainer = document.getElementById("quote-list");
    quoteListContainer.appendChild(quoteContainer);
}

console.log(citationInput.value)
console.log(authorInput.value)


submit.addEventListener('click', () => { 
    addQuote(citationInput.value,authorInput.value);
}
)

form.addEventListener('click', (e) => {
e.preventDefault();
})