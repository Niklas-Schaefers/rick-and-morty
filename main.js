import { createCharacterElements } from "./components/characters.js";
import "./style.css";
import { createElement } from "./utils/elements.js";

const header = createElement("header", {
  className: "hero",
  children: [
    createElement("h1", {
      className: "header__title",
      innerText: "Ricky and Morty",
    }),
    createElement("input", {
      className: "input",
      placeholder: "Search character",
      autofocus: true,
    }),
  ],
});

const characters = [
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/107.jpeg",
    name: "Dr. Wong",
    status: "Alive",
    species: "Human",
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/182.jpeg",
    name: "Jim",
    status: "Alive",
    species: "Human",
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    name: "Ricky Sánchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/630.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
];

const section = createElement("section", {
  className: "results",
  children: characters.map(createCharacterElements),
});

const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("div", {
      className: "footer__elements",
      children: [
        createElement("span", { innerText: "This is" }),
        createElement("span", { innerText: " the footer" }),
      ],
    }),
  ],
});

document.querySelector("#app").append(header, section, footer);
