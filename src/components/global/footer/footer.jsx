export const Footer = ({isDarkMode}) => {
  return (
    <footer className={isDarkMode ? "lightFooter":"darkFooter"}>
      <p> © 2023 Flight Development </p>
    </footer>
  );
};
