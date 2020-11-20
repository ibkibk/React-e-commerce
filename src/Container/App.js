import React from "react";
import "./App.css";
import Routes from "../Routes/Routes";
import { ProductProvider } from "../Component/Context";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes />
        <div></div>
      </div>
    </ProductProvider>
  );
}

export default App;
