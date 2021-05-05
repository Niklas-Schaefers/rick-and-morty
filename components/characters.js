import { createElement } from "/utils/elements.js";
import "./characters.css";

export function createCharacterElements({
  image,
  name,
  status,
  species,
  location,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: "Status: " + status }),
      createElement("p", { innerText: "Species: " + species }),
      createElement("p", { innerText: "Location: " + location.name }),
    ],
  });
}
