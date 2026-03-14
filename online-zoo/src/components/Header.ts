export const Header = (): void => {
  const usernameEl = document.getElementById("user-name");
  if (!usernameEl) return;
  const username = "Irakli";
  const isLoggedIn = true;
  if (isLoggedIn) {
    usernameEl.innerHTML = username;
  }
  return;
};
