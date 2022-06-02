import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar />
          <header className="App-header">
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/" replace/>} />
          </Routes>
            <p>
              <br></br>
              <a
                className="App-link"
                href="https://linkedin.com/in/mausa10"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" | "}
              <a
                className="App-link"
                href="https://wonderweb.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </p>
          </header>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
