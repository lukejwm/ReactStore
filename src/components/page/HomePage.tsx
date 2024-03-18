import { Container, Row, Col } from "react-bootstrap";
import products from "../../domain/store-data";
import ProductList from "../feature/ProductList";

const HomePage = () => {
  return (
    <>
      <Container>
        <main>
          <Row className="py-lg-5 justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h1 className="fw-light">Browse our Products</h1>
            </Col>
          </Row>

          <ProductList children={products} />
        </main>
      </Container>
    </>
  );
};

export default HomePage;
