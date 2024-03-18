import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../ui/productCard/ProductCard";
import Product from "../../domain/product";

interface ProductListProps {
  children: Product[];
}

function ProductList({ children }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = children.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination
  const handlePagination = (direction: string) => {
    setCurrentPage((prevPage) =>
      direction === "next" ? prevPage + 1 : prevPage - 1
    );
  };

  return (
    <>
      <div className="album py-5">
        <Container>
          <Row xs={1} sm={2} md={3} className="g-3">
            {currentProducts.map((product, index) => (
              <ProductCard key={index} children={product} />
            ))}
          </Row>
        </Container>
      </div>

      <div className="d-flex justify-content-center">
        <Button
          variant="outline-secondary"
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handlePagination("next")}
          disabled={indexOfLastItem >= children.length}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default ProductList;
