// All Those Pokemon!

let pokemon;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokemon = strData.split(/\r?\n/)));

//   event listeners
document.getElementById("btn1").addEventListener("click", randomPokemon);
document.getElementById("btn2").addEventListener("click", randomTeam);
document
  .getElementById("input1")
  .addEventListener("change", pokemonFirstLetter);
document
  .getElementById("input2")
  .addEventListener("change", pokemonAmountOfLetters);

function randomPokemon() {
  let randPokemon = Math.floor(Math.random() * 418);
  document.getElementById(
    "span1"
  ).innerHTML = `<img src="images/${pokemon[randPokemon]}.png"/>  <span>${pokemon[randPokemon]}</span>`;
}

function randomTeam() {
  let randPokemon1 = Math.floor(Math.random() * 418);
  let randPokemon2 = Math.floor(Math.random() * 418);
  let randPokemon3 = Math.floor(Math.random() * 418);
  document.getElementById(
    "span2"
  ).innerHTML = `<img src="images/${pokemon[randPokemon1]}.png"/>  <span>${pokemon[randPokemon1]},</span> <img src="images/${pokemon[randPokemon2]}.png"/>  <span>${pokemon[randPokemon2]},</span> <img src="images/${pokemon[randPokemon3]}.png"/>  <span>${pokemon[randPokemon3]}</span>`;
}

function pokemonFirstLetter() {
  document.getElementById("div1").innerHTML = "";
  let letter = document.getElementById("input1").value;
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].charAt(0) == letter) {
      document.getElementById(
        "div1"
      ).innerHTML += `<img src="images/${pokemon[i]}.png"/>  <span>${pokemon[i]},</span>`;
    }
  }
}

function pokemonAmountOfLetters() {
  document.getElementById("div2").innerHTML = "";
  let num = document.getElementById("input2").value;
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].length == num) {
      document.getElementById(
        "div2"
      ).innerHTML += `<img src="images/${pokemon[i]}.png"/>  <span>${pokemon[i]},</span>`;
    }
  }
}
