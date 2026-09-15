export type Theme = "light" | "dark";

export const themeStorageKey = "linfy-theme";

// Runs before hydration so the first paint uses the user's saved/system theme.
export const themeScript = `(() => {
  let stored = null;
  try {
    stored = window.localStorage.getItem("${themeStorageKey}");
  } catch {}

  const theme = stored === "light" || stored === "dark"
    ? stored
    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();`;
