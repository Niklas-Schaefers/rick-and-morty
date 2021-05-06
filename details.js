import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements.js";
import { getCharacter } from "./utils/api";
import { createCharacterDetails } from "./components/characterDetails.js";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

const value = getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

console.log(value);

const mainElement = createElement("main", {
  className: styles.main,
});

// const charactersSection = createElement("section", {
//   className: "results",
// });

document.querySelector("#app").append(mainElement);
