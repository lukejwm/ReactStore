import { useState } from "react";
import Category from "../../domain/category";
import FormLabel from "../ui/form/FormLabel";
import FormDropdown from "../ui/form/FormDropdown";
import { Form, Card, Button } from "react-bootstrap";

// interface AddNewProductFormProp {
//   // TODO: refactor to use props once this is working
// }

const AddNewProductForm = () => {
  // TODO: put this in custom hook when ready
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCatgeory, setProductCatgeory] = useState<Category>();

  const handleFormSubmit = (formData: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <Card>
        <Form className="form-card">
          <Form.Group className="mb-3" controlId="formGroupProductName">
            <FormLabel
              labelText="Product Name"
              inputType="text"
              placeholder="Enter a product name"
              value={productName}
              onChange={() => setProductName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupProductDescription">
            <FormLabel
              labelText="Product Description"
              inputType="text"
              placeholder="Enter the product's description"
              value={productName}
              onChange={() => setProductDescription}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupCategory">
            <FormDropdown
              children={Object.values(Category)}
              label="Select a Product Category"
              defaultValue="Choose..."
              onChange={() => setProductCatgeory}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Can the Product Expire?" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AddNewProductForm;
