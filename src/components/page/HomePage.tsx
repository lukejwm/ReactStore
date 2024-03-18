import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../feature/ProductList";
import CategorySelection from "../feature/CategorySelection";

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

          {/* Category selection dropdown */}
          <CategorySelection />

          {/* Product list */}
          <ProductList />
        </main>
      </Container>
    </>
  );
};

export default HomePage;
