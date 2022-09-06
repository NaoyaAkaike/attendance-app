import { Login } from "./pages/Login";
import { TestAapi } from "./pages/TestApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
