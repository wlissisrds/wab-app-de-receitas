import { useState } from "react";
import Category from "./components/Category";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

//pages
import Pages from "./pages/Pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
