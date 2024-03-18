import useProductForm from "../customHooks/useProductFormState";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../state/product/productSlice";
import Category from "../../domain/category";
import FormLabel from "../ui/form/FormLabel";
import FormDropdown from "../ui/form/FormDropdown";
import { Form, Card, Button } from "react-bootstrap";
import Product from "../../domain/product";

// interface AddNewProductFormProp {
//   // TODO: refactor to use props once this is working
// }

const AddNewProductForm = () => {
  const [formState, setFormState] = useProductForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formattedExpiryDate = expiryDate ? expiryDate.toISOString() : null;

    // Create the new product object
    const newProduct = {
      name: formState.productName,
      description: formState.productDescription,
      isPerishable: formState.isPerishable,
      expiryDate: formState.expiryDate
        ? formState.expiryDate.toISOString()
        : "",
      category: formState.productCategory,
      price: formState.productPrice,
      onSpecial: formState.isOnSpecial,
      image: "#",
    };

    console.log(newProduct);

    // Dispatch an action to add the new product to the store
    dispatch(addNewProduct(newProduct));

    // Clear form fields after submission
    setFormState({
      productName: "",
      productDescription: "",
      productCategory: undefined,
      isPerishable: false,
      expiryDate: undefined,
      productPrice: 0.0,
      isOnSpecial: false,
    });
  };

  return (
    <>
      <Card>
        <Form className="form-card" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formGroupProductName">
            <FormLabel
              labelText="Product Name"
              inputType="text"
              placeholder="Enter a product name"
              value={formState.productName}
              onChange={(event) =>
                setFormState({ productName: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupProductDescription">
            <FormLabel
              labelText="Product Description"
              inputType="text"
              placeholder="Enter the product's description"
              value={formState.productDescription}
              onChange={(event) =>
                setFormState({ productDescription: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupCategory">
            <FormDropdown
              children={Object.values(Category)}
              label="Select a Product Category"
              defaultValue="Choose..."
              onChange={() => setFormState}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Can the Product Expire?"
              checked={formState.isPerishable}
              onChange={(event) =>
                setFormState({ isPerishable: event.target.checked })
              }
            />
          </Form.Group>

          {formState.isPerishable && (
            <Form.Group className="mb-3" controlId="formGroupExpiryDate">
              <FormLabel
                labelText="Expiry Date"
                inputType="date"
                placeholder="Select expiry date"
                value={formState.expiryDate?.toString() || ""}
                onChange={(event) =>
                  setFormState({ expiryDate: new Date(event.target.value) })
                }
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formGroupProductPrice">
            <FormLabel
              labelText="Product Price"
              inputType="number"
              placeholder="Enter the product's price"
              value={formState.productPrice.toString()}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  productPrice: parseFloat(event.target.value),
                })
              }
            />
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
