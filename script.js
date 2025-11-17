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
    count.textContent = "0 citation ☹️";
  } else if (quoteCount === 1) {
    count.textContent = "1 citation 🙂";
  } else {
    count.textContent = `${quoteCount} citations 😁`;
  }
}

function counterdown() {
  quoteCount--;

  if (quoteCount === 0) {
    count.textContent = "0 citation ☹️";
  } else if (quoteCount === 1) {
    count.textContent = "1 citation 🙂";
  } else {
    count.textContent = `${quoteCount} citations 😁`;
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
  quoteContainer.setAttribute("class", "container_quotes");
  quoteContainer.appendChild(textP);
  quoteContainer.appendChild(authorP);
  
  // 3. Insertion de ce nouveau container dans le dom dans "quote-list"
  quoteListContainer.appendChild(quoteContainer);
  
  // Bonus perso : bouton de suppression (+ création d'un "identifiant" par bouton de supression de la citation)
//   const deletionBtn = document.createElement("div");
  const deletionBtn = document.createElement("div");
  const textBtn = document.createTextNode("Supprimer");
  deletionBtn.setAttribute("class", "deletionButton");
  deletionBtn.setAttribute("identifier", `${innerText.textContent}`);
  deletionBtn.appendChild(textBtn);
  quoteContainer.appendChild(deletionBtn);
}



// ----- Evenements -----

// Soumission des entrées de textes avec leur auteur
submit.addEventListener("click", () => {
    addQuote(`" ${citationInput.value} "`, authorInput.value);
  counterUp();
  // on vide les inputs à la soumission
  citationInput.value = "";
  authorInput.value = "";
});

// Eviter le chargement autommatique du "form"
form.addEventListener("click", (e) => {
  e.preventDefault();
});



// ----- Bonus perso : Logique de suppression ----- 

quoteListContainer.addEventListener("click", (e) => {
//   const btnAttributSelected = e.target.childNodes[2].attributes[0].value;
  const btnAttributSelected = e.target.attributes[1].textContent;
  const parentFirstChildTextContentSelected = e.target.parentNode.firstChild.textContent;

  console.log(btnAttributSelected + " " + e.target.parentNode.firstChild.textContent)
  console.log(e.target.parentNode)

//   si l'attribut du bouton de supression correspond à la valeur du texte de citation du parent (donc **textP**), on supprime alors le conteneur parent du texte de citation
  if (btnAttributSelected === parentFirstChildTextContentSelected) {
    e.target.parentNode.remove();
    counterdown();
  }
});
