import { fetchFeedbacks } from "../lib/fetchFeedbacks";
import type { Feedback } from "../types/Feedback";

export const Feedbacks = async (): Promise<void> => {
  const container = document.getElementById("feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="loader">
      Loading ...
    </div>
  `;

  try {
    const feedbacks: Feedback[] = await fetchFeedbacks();

    container.innerHTML = "";

    feedbacks.forEach((feedback) => {
      const element = `
    <div class="feedback-card">
      <label>${feedback.city}</label>
      <label>${feedback.month}</label>
      <label>${feedback.year}</label>
      <p>${feedback.text}</p>
      <div class="title">${feedback.name}</div>
    </div>
  `;

      container.insertAdjacentHTML("beforeend", element);
    });
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
};
