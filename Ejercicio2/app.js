//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithP = document.createElement("div");
divWithP.innerHTML = "<p></p>";
document.body.appendChild(divWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divWith6P = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  divWith6P.appendChild(p);
}

document.body.appendChild(divWith6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dynamicP = document.createElement("p");
dynamicP.innerText = "Soy dinámico";
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const newUl = document.createElement("ul");

apps.forEach((app) => {
  const li = document.createElement("li");
  li.innerText = app;
  newUl.appendChild(li);
});

document.body.appendChild(newUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeElements = document.querySelectorAll(".fn-remove-me");
removeElements.forEach((element) => {
  element.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pBtweenDivs = document.createElement("p");
pBtweenDivs.innerText = "Voy en medio!";

const divs = document.querySelectorAll("div");
divs[0].after(pBtweenDivs);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.

const divInside = document.querySelectorAll(".fn-insert-here");
divInside.forEach((div) => {
  const pInside = document.createElement("p");
  pInside.innerText = "Voy dentro!";
  div.appendChild(pInside);
});
