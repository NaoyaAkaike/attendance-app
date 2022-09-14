import { Login } from "./pages/Login";
import { TestAapi } from "./pages/TestApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { RecoilRoot } from "recoil";
import { Email } from "./pages/password/email";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/password/email" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
