import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/shop" element ={<Shop/>} />
          <Route path="/cart" element ={<Cart/>} />
          <Route path="/contact" element ={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
