import { useState } from "react";
import Product from "../../../domain/product";
import EditProductModal from "../../feature/EditProductModal";
import { Card, Button } from "react-bootstrap";

interface ProductCardProps {
  children: Product;
}

const ProductCard = ({ children }: ProductCardProps) => {
  const isOnSpecial = children.onSpecial;
  const background = isOnSpecial ? "danger" : "light";

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="col">
      <Card className="shadow-sm" bg={background}>
        <div className="bd-placeholder-img card-img-top">
          {/* TODO: get actual images to replace this! */}
          <img src={children.image} height="225" width="100%" />
        </div>
        <Card.Body>
          <Card.Title>
            {children.name}
            {isOnSpecial && (
              <span className="special-indicator"> (ON SPECIAL)</span>
            )}
          </Card.Title>
          <Card.Text>{children.description}</Card.Text>
          <Card.Text>
            <strong>Price: £{children.price}</strong>
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleEditClick}
            >
              Edit
            </Button>
            {children.isPerishable ? (
              <small className="text-muted">
                Expires: {children.expiryDate}
              </small>
            ) : null}
          </div>
        </Card.Body>
      </Card>

      <EditProductModal
        product={children}
        show={showEditModal}
        onHide={handleCloseEditModal}
      />
    </div>
  );
};

export default ProductCard;
