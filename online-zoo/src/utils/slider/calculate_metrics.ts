export const calculate_metrics = ({
  slider,
  viewport,
  cardSelector,
}: {
  slider: HTMLElement;
  viewport: number;
  cardSelector: string;
}) => {
  const slider_width: number = slider.offsetWidth;
  const slider_overflow: number = slider_width - viewport;
  const slider_styles: CSSStyleDeclaration = window.getComputedStyle(slider);
  const gap: number = parseFloat(slider_styles.getPropertyValue("gap"));
  const card = slider.querySelector<HTMLElement>(cardSelector);
  if (!card) return null;
  const card_width: number = card.offsetWidth;
  const step_width: number = card_width + gap;

  return {
    slider_width,
    slider_overflow,
    slider_styles,
    gap,
    card_width,
    step_width,
  };
};
