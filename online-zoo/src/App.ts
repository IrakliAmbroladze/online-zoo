import { Header } from "./components/Header";
import { create_slider } from "./utils/slider/create_slider";

export default function App() {
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

  Header();
  console.log("This is an app component");
  return;
}
