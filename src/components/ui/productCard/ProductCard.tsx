import Product from "../../../domain/product";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProductCardProps {
  children: Product;
}

const ProductCard = ({ children }: ProductCardProps) => {
  const isOnSpecial = children.onSpecial;
  const background = isOnSpecial ? "danger" : "light";

  return (
    <div className="col">
      <Card className="shadow-sm" bg={background}>
        <div className="bd-placeholder-img card-img-top">
          {/* TODO: get actual images to replace this! */}
          <img
            src="/home/lukejwm/Coding/react-bootstrap-templates/react-vite-album-template/src/assets/react.svg"
            height="225"
            width="100%"
          />
        </div>
        <Card.Body>
          <Card.Title>
            {children.name}
            {isOnSpecial && (
              <span className="special-indicator"> (ON SPECIAL)</span>
            )}
          </Card.Title>
          <Card.Text>{children.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="outline-secondary" size="sm">
              <Link to={`/products/${children.id}`}>View</Link>
            </Button>
            <Button variant="outline-secondary" size="sm">
              Edit
            </Button>
            {children.isPerishable ? (
              <small className="text-muted">
                Expires: {children.expiryDate.toDateString()}
              </small>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
