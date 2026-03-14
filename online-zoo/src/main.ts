import App from "./App";
import { loadComponent } from "./utils/loadComponent";
import { create_slider } from "./utils/slider/create_slider";

const left_arrow = document.getElementById("sldr_left_arr");
const right_arrow = document.getElementById("sldr_right_arr");
const slider_container = document.getElementById("slider");

const container = document.getElementById("pets-container");
const viewport = container.offsetWidth - 80; //deducting padding
create_slider({
  prev_btn: left_arrow,
  next_btn: right_arrow,
  slider: slider_container,
  viewport,
  cardSelector: ".animals-card",
});

async function main() {
  try {
    await loadComponent("#header", "/components/header.html");
    await loadComponent("#footer", "/components/footer.html");
    App();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Caught an Error object:", err.message);
    } else {
      console.error("Caught an unknown error type:", err);
    }
  }
}
main();
