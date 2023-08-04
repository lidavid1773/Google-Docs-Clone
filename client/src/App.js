import TextEditor from "./TextEditor";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/documents/${uuidV4()}`);
  }, [navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
