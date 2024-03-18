import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../state/product/productSlice";
import Product from "../../domain/product";

interface EditProductModalProps {
  show: boolean;
  onHide: () => void;
  product: Product;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  show,
  onHide,
  product,
}: EditProductModalProps) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateProduct(editedProduct));
    onHide();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Add more form fields for other product attributes */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;
