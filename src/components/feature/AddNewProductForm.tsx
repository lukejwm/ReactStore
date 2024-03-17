import { useState } from "react";

// interface AddNewProductFormProp {
//   // TODO: refactor to use props once this is working
// }

const AddNewProductForm = () => {
  // TODO: put this in custom hook when ready
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleFormSubmit = (formData: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form className="px-4 py-3" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>
          Product Name:
          <input
            type="text"
            className="form-control"
            placeholder="Enter a product name"
            value={productName}
            onChange={(formData) => setProductName(formData.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Product Description:
          <input
            type="text"
            className="form-control"
            placeholder="Enetr a product description"
            value={productDescription}
            onChange={(formData) =>
              setProductDescription(formData.target.value)
            }
          />
        </label>
      </div>
      <button type="submit" className="but but-primary mb-3">
        Add New Product
      </button>

      {/* <label>
        Category:
        <input type="text" value={productName} />
      </label>
      <label>
        Price:
        <input type="text" value={productName} />
      </label>
      <label>
        Can Expire?:
        <input type="text" value={productName} />
      </label>
      <label>
        Expiry Date:
        <input type="text" value={productName} />
      </label>
      <label>
        On Special:
        <input type="text" value={productName} />
      </label> */}
    </form>
  );
};

export default AddNewProductForm;
