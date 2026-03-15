import { Header } from "./components/Header";
import { MeetPets } from "./components/MeetPets";
import { user } from "./constants/user";
import { create_slider } from "./utils/slider/create_slider";

export default async function App() {
  Header({ user });
  await MeetPets();
  const container = document.getElementById("pets-container");
  if (!container) return;
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider_container = document.getElementById("slider");
  const viewport = container.offsetWidth - 80; //deducting padding
  if (!left_arrow || !right_arrow || !slider_container) return;

  create_slider({
    prev_btn: left_arrow,
    next_btn: right_arrow,
    slider: slider_container,
    viewport,
    cardSelector: ".animals-card",
  });
}
