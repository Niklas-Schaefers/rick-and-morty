import { createCharacterElements } from "./components/characters.js";
import "./style.css";
import { createElement } from "./utils/elements.js";
import { getCharacters, removeChildren } from "./utils/api";

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
      oninput: (event) => {
        removeChildren(charactersSection);
        const search = event.target.value;

        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElements);
          charactersSection.append(...characterElements);
        });
      },
    }),
  ],
});

const charactersSection = createElement("section", {
  className: "results",
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

document.querySelector("#app").append(header, charactersSection, footer);
