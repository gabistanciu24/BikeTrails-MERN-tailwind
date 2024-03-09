import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage.jsx";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/trail/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
