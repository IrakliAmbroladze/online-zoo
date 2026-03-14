interface ModalOptions {
  triggerSelector: string;
  closeSelector?: string;
  modalSelector: string;
  activeClass: string;
  scope?: Element | Document;
}

export function createModal({
  triggerSelector,
  closeSelector,
  modalSelector,
  activeClass,
  scope = document,
}: ModalOptions) {
  const modal = scope.querySelector(modalSelector);
  if (!modal) return;

  const toggle = () => modal.classList.toggle(activeClass);
  const open = () => modal.classList.add(activeClass);
  const close = () => modal.classList.remove(activeClass);

  scope.querySelector(triggerSelector)?.addEventListener("click", toggle);
  if (closeSelector) {
    scope.querySelector(closeSelector)?.addEventListener("click", close);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  return { open, close, toggle };
}
