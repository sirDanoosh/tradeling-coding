import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ProductListPage} />
        <Route path="/product-page/:id" Component={ProductPage} />
      </Routes>
    </Router>
  );
}

export default App;
