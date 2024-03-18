import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import Category from "../../domain/category";
import { setCategory } from "../../state/product/productSlice";

const CategorySelection = () => {
  const dispatch = useDispatch();

  const handleCategorySelection = (category: Category | null) => {
    dispatch(setCategory(category));
  };

  const categoryOptions = Object.values(Category);

  return (
    <div className="categorySelection">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Show Products by Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categoryOptions.map((category, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </Dropdown.Item>
          ))}
          <Dropdown.Item onClick={() => handleCategorySelection(null)}>
            All Products
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CategorySelection;
