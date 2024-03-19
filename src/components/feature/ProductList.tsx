import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Container, Row, Button } from "react-bootstrap";
import ProductCard from "../ui/productCard/ProductCard";

function ProductList() {
  // Load the list of products from the state
  const productList = useSelector(
    (state: RootState) => state.product.productList
  );

  // get a selected from the state
  const selectedCategory = useSelector(
    (state: RootState) => state.product.selectedCategory
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = selectedCategory
    ? productList.filter((product) => product.category === selectedCategory)
    : productList.slice(indexOfFirstItem, indexOfLastItem);

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
            {currentProducts.map((product) => (
              <ProductCard key={product.name} children={product} />
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
          disabled={indexOfLastItem >= productList.length}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default ProductList;
