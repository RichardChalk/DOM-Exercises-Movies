// DOM Selection

// SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS
// SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS
// SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS
// SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS SELECTORS

// GetElementById() ==================================================
// 1. Skapa en variabel som heter title som är lika med rubriken
// Logga title till consolen
const title = document.getElementById("main-heading");
console.log(title);

// GetElementByClassName() ===========================================
// 2. Skapa en variabel som heter listItemsByClass som innehåller alla list-items
// Logga listItemsByClass till consolen
const listItemsByClass = document.getElementsByClassName("list-items");
console.log(listItemsByClass);

// GetElementByTagName() =============================================
// 3. Skapa en variabel som heter listItemsByTag som innehåller alla list-items
// Logga listItemsByTag till consolen
const listItemsByTag = document.getElementsByTagName("li");
console.log(listItemsByTag);

// QuerySelector() - Väljer den FÖRSTA element som matchar  ==========
// 4. Selekta den första div tag och lägg den i en variabel som heter container
// Logga container till consolen
const container = document.querySelector("div");
console.log(container);

// QuerySelectorAll() - Väljer ALLA element som matchar ==============
// 5. Skapa en variabel som heter allDivs och logga den till consolen
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

// STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING
// STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING
// STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING
// STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING STYLING

// 6. Ändra färgen på rubriken. Använd QuerySelector
const qTitle = document.querySelector("#main-heading");
qTitle.style.color = "green";

// 7. Gör font storlek lite större för alla list items.
// Använd QuerySelectorAll
const qListItems = document.querySelectorAll(".list-items");

for (let i = 0; i < qListItems.length; i++) {
  qListItems[i].style.fontSize = "3rem";
}

// 8. Flytta texten i footer till höger... det ser konstigt ut när den står i mitten
// Använd querySelector
const footer = document.querySelector(".footer");
footer.style.textAlign = "right";

// CREATING CREATING CREATING CREATING CREATING CREATING CREATING CREATING
// CREATING CREATING CREATING CREATING CREATING CREATING CREATING CREATING
// CREATING CREATING CREATING CREATING CREATING CREATING CREATING CREATING
// CREATING CREATING CREATING CREATING CREATING CREATING CREATING CREATING

// 9. Jag glömde Indiana Jones! Lägg till det i din ul (lite svårare)
// Tips: Undvik innerHTML då det finns säkerhetsrisker
const myList = document.querySelector("ul");
const myListItem = document.createElement("li");
myListItem.innerText = "Indiana Jones";
myList.append(myListItem);

// Method 1 Det finns en metod som heter removeAttribute också!
myListItem.setAttribute("class", "list-items");

// Method 2 (gör samma i detta fall som setAttribute ovanpå)
myListItem.classList.add("list-items");

// Jag uppdaterar fontstorleken för att matcha övning 7
myListItem.style.fontSize = "3rem";

// 10. På samma sätt som i övning 9 vill jag att du lägga till The Hoobit (lite svårare)
// OBS: Denna gång vill jag att The Hobbit hamnar högst upp i listan
const myListItemHobbit = document.createElement("li");
myListItemHobbit.innerText = "The Hobbit";
myList.prepend(myListItemHobbit);

// Method 1 Det finns en metod som heter removeAttribute också!
myListItemHobbit.setAttribute("class", "list-items");

// Jag uppdaterar fontstorleken för att matcha övning 7
myListItemHobbit.style.fontSize = "3rem";

// REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING
// REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING
// REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING
// REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING REMOVING

// 11. Min fru hatar Keanu Reeves... ta bort alla filmer som han är med i.
// Tips: Du får uppdatera HTML koden
const keanu = document.querySelector(".keanu");
keanu.remove();

// TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM
// TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM
// TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM
// TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM TRAVERSING THE DOM

// 12. Log till consolen parent till din lista
// svar = <div class="container">
const ulTraverse = document.querySelector("ul");
console.log(ulTraverse.parentNode);

// 13. Log till consolen grandparent till din lista
// svar = <body>
console.log(ulTraverse.parentNode.parentNode);

// 14. Log till consolen child till din lista

// Mellan varje <li>, finns det en 'ny rad' (\n) och några mellanslag ( ). Dessa tolkas som 'text nodes'
// OBS: Även 'ny rad' räknas som en text node (så du kanske inte förväntade dig resultatet)
// TIPS! Titta på 'node value' i consolen av Google Chrome för en text node!
console.log(ulTraverse.childNodes);

// 15. Gör first child i din lista till en röd background
// Method 1
ulTraverse.firstChild.style.backgroundColor = "Red";

// Method 2
ulTraverse.childNodes[0].style.backgroundColor = "Red";

// 16. Log till console previous sibling till din lista
// Svar: Också lite misledande! Det finns en text node som är 'ny rad' och några mellanslag
console.log(ulTraverse.previousSibling);

// 17. Log till console next sibling till din lista
// Svar: Också lite misledande! Det finns en text node som är 'ny rad' och några mellanslag
console.log(ulTraverse.nextSibling);
