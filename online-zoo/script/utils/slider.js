export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider = document.getElementById("slider");
  left_arrow.addEventListener("click", () => {
    console.log("clicked on left arrow");
    slider.style.transform = "translate(-50px)";
  });
  right_arrow.addEventListener("click", () => {
    console.log("clicked on right arrow");
    slider.style.transform = "translate(50px)";
  });
};
