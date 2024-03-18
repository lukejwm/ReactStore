import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/ui/layout/Layout";
import HomePage from "./components/page/HomePage";
import AddNewProductPage from "./components/page/AddNewProductPage";
import ProductPage from "./components/page/ProductPage";
import NoPage from "./components/page/NoPage";

function App() {
  return (
    <Router>
      <div className="ReactStoreApp">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="add-new" element={<AddNewProductPage />} />
            <Route path="products/:productId" />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
