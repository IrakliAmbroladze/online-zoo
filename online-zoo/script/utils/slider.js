export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider = document.getElementById("slider");
  const rect = slider.getBoundingClientRect();
  const slider_width = slider.offsetWidth;
  const xCoordinate = rect.left;
  console.log("x: ", xCoordinate);
  console.log("slider_width: ", slider_width);
  const container = document.getElementById("pets-container");
  const viewport = container.offsetWidth - 80;
  console.log("pest container width: ", viewport);
  let counter = 0;
  const step_width = slider_width / 4;
  left_arrow.addEventListener("click", () => {
    if (counter > -1) {
      return;
    }
    counter++;
    console.log(counter);
    console.log("clicked on left arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
  right_arrow.addEventListener("click", () => {
    if (counter < 0) {
      return;
    }
    counter--;
    console.log(counter);
    console.log("clicked on right arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
};
