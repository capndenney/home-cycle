import Nav from "./Nav";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer>
      <h6>Thanks for visiting, &copy; {year} Home Cycle </h6>
      <Nav />
    </footer>
  );
};

export default Footer;
