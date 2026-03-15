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
  const metrics = calculate_metrics({ slider, viewport, cardSelector });
  if (!metrics) return;
  const { slider_overflow, step_width } = metrics;

  let offset = 0;

  const moveRight = () => {
    const remaining = slider_overflow + offset;

    if (remaining <= 0) {
      offset = 0;
    } else if (remaining < step_width) {
      offset -= remaining;
    } else {
      offset -= step_width;
    }

    slider.style.transform = `translateX(${offset}px)`;
  };

  const moveLeft = () => {
    if (offset >= 0) {
      offset = -slider_overflow;
    } else if (-offset < step_width) {
      offset = 0;
    } else {
      offset += step_width;
    }

    slider.style.transform = `translateX(${offset}px)`;
  };
  prev_btn.addEventListener("click", moveLeft);
  next_btn.addEventListener("click", moveRight);
};
