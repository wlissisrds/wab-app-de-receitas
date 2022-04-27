import { useState } from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

//pages
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
