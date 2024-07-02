import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
