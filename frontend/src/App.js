import { Login } from "./pages/Login";
import { TestAapi } from "./pages/TestApi";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="/edit" element={<EditTodoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
