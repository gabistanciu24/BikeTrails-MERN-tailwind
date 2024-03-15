import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/trail/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
