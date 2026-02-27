// récupération des pièces depuis fichier JSON
const reponse = await fetch('pieces-autos.json')
const pieces = await reponse.json()

// création des balises
const article = pieces[0]

const imageElement = document.createElement("img")
imageElement.src = article.image

const nomElement = document.createElement("h2")
nomElement.innerText = article.nom 

const prixElement = document.createElement("p")
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`

const categorieElement = document.createElement("p")
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

// création des éléments pour l'exercice 
const descriptionElement = document.createElement("p")
descriptionElement.innerText = article.description ?? "Pas de description pour le moment."

const stockElement = document.createElement("p")
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock"


// rattachement des balises crées au DOM 
const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

// ajout des éléments au DOM pour l'exo
sectionFiches.appendChild(descriptionElement)
sectionFiches.appendChild(stockElement)
