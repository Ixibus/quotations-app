// Déclaration de variables globales

const body = document.querySelector("body");
const citationInput = document.getElementById("citation_input");
const authorInput = document.getElementById("author_input");
const submit = document.getElementById("submitAction");
const form = document.querySelector("form");
const quoteListContainer = document.getElementById("quote-list");

const count = document.querySelector("h3");



// ----- Compteur de citations -----

let quoteCount = 0;

function counterUp() {
  quoteCount++;

  if (quoteCount === 0) {
    count.textContent = "0 citation";
  } else if (quoteCount === 1) {
    count.textContent = "1 citation";
  } else {
    count.textContent = `${quoteCount} citations`;
  }
}

function counterdown() {
  quoteCount--;

  if (quoteCount === 0) {
    count.textContent = "0 citation";
  } else if (quoteCount === 1) {
    count.textContent = "1 citation";
  } else {
    count.textContent = `${quoteCount} citations`;
  }
}



// ----- Ajouteur de citation -----

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
  
  // 3. Insertion de ce nouveau container dans le dom dans "quote-list"
  quoteListContainer.appendChild(quoteContainer);
  
  // Bonus perso : bouton de suppression (+ création d'un identifiant par citation)
  const deletionBtn = document.createElement("span");
  const textBtn = document.createTextNode("Supprimer la citation");
  deletionBtn.setAttribute("identifier", `${innerText.textContent}`);
  quoteContainer.appendChild(deletionBtn);
  quoteContainer.appendChild(textBtn);
}



// ----- Evenements -----

// Soumission des entrées de textes avec leur auteur
submit.addEventListener("click", () => {
    addQuote(citationInput.value, authorInput.value);
  counterUp();
});

// Eviter le chargement autommatique du "form"
form.addEventListener("click", (e) => {
  e.preventDefault();
});



// ----- Bonus perso : Logique de suppression ----- 

quoteListContainer.addEventListener("click", (e) => {
  const btnAttributSelected = e.target.childNodes[2].attributes[0].value;

  // si l'attribut du bouton de supression correspond à la valeur du texte de citation (donc **textP**), on supprime son parent containeur du texte de citation
  if (btnAttributSelected === e.target.firstChild.textContent) {
    e.target.remove();
    counterdown();
  } else {
    console.log("non");
  }

});
