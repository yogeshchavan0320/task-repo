import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Setting from "./pages/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/setting" exact element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
