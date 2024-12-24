export const toggleTheme = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const nameTheme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nameTheme);
};
