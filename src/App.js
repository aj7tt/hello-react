import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ProductList from "./Components/ProductList";


function App() {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 0,
      description: "Product 1 description",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 0,
      description: "Product 2 description",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      {/* navbar component */}
      <Navbar />

      {/* form content */}
      <Form />

      <ProductList product={product} />

      {/* footer */}
    </>
  );
}

export default App;
