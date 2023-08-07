import { useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  return (
    <div>
      <Navbar />
      <h2 className="title">your cart</h2>
      <CartContainer />
    </div>
  );
}

export default App;
