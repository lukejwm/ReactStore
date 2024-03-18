import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="text-muted py-5">
        <Container>
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">2024 &copy; Made with Bootstrap</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
