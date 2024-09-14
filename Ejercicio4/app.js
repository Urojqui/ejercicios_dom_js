/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click */

const button = document.createElement("button");
button.classList.add("btnToClick");
button.innerText = "Click";

document.body.appendChild(button);

button.addEventListener("click", (ev) => {
  console.log(ev);
});

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    console.log('focus',event.target.value);
  });
});

console.log(inputs)

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    console.log("input:", event.target.value);
  });
}); 

/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulList = document.createElement('ul');
albums.forEach((album) => {
    const li = document.createElement("li");
    li.innerText = album;
    ulList.appendChild(li);
});

document.body.appendChild(ulList);