import { calculate_metrics } from "./calculate_metrics";

type CreateSliderProps = {
  prev_btn: HTMLElement;
  next_btn: HTMLElement;
  slider: HTMLElement;
  viewport: number;
  cardSelector: string;
};

export const create_slider = ({
  prev_btn,
  next_btn,
  slider,
  viewport,
  cardSelector,
}: CreateSliderProps) => {
  const { slider_overflow, step_width } = calculate_metrics({
    slider,
    viewport,
    cardSelector,
  });

  let offset = 0;

  const moveLeft = () => {
    offset += step_width;
    if (offset > 0) {
      offset = -slider_overflow;
    }
    slider.style.transform = `translateX(${offset}px)`;
  };
  const moveRight = () => {
    offset -= step_width;
    if (offset < -slider_overflow) {
      offset = 0;
    }
    slider.style.transform = `translateX(${offset}px)`;
  };

  prev_btn.addEventListener("click", moveLeft);
  next_btn.addEventListener("click", moveRight);
};
