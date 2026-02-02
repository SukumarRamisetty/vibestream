const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{ position: "fixed", top: 10, right: 10 }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
