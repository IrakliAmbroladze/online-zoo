import { fetchCameras } from "../lib/fetchCameras";
import type { Camera } from "../types/Camera";
import { Cameras } from "./Cameras";

export default async function Zoos() {
  Cameras();
  enum Numbers {
    zero = 1,
    one,
    two,
    three,
  }

  console.log("number one is: ", typeof Numbers[2]);
  console.log("number one is: ", Numbers.one);
  console.log("number one is: ", Numbers.two);
  console.log("number one is: ", Numbers.three);

  const container = document.getElementById("cameras-container");
  if (!container) return;

  container.innerHTML = `
    <div class="loader">
      Loading cameras...
    </div>
  `;
  try {
    const cameras: Camera[] = await fetchCameras();
    container.innerHTML = "";

    console.log(cameras);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Caught an Error object:", err.message);
    } else {
      console.error("Caught an unknown error type:", err);
    }

    container.innerHTML = `
      <div class="error">
        <p>Something went wrong. Please, refresh the page</p>
      </div>
    `;
  }
  console.log("start creating zoos page");
}
