export const Cameras = () => {
  const elDoubleArrows = document.getElementById("double_arrow");
  const elCameras = document.getElementById("cameras");
  elDoubleArrows?.addEventListener("click", () => {
    if (!elCameras) return;
    elCameras.classList.toggle("shrinked");
    console.log("clicked arrow");
  });
  return;
};
