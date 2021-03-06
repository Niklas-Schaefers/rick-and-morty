import { createElement } from "../utils/elements";
import "./characters.css";

export function createCharacterElements({
  image,
  name,
  status,
  species,
  location,
  id,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("a", {
        href: `details.html?id=${id}`,
        children: [createElement("img", { src: image })],
      }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: "Status: " + status }),
      createElement("p", { innerText: "Species: " + species }),
      createElement("p", { innerText: "Location: " + location.name }),
    ],
  });
}
