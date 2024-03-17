import AddNewProductForm from "../feature/AddNewProductForm";

const AddNewProductPage = () => {
  return (
    <>
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Add a New Product</h3>
            <p className="blue-text">
              Complete the form to add a new product to the catalogue.
            </p>
            <AddNewProductForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProductPage;
