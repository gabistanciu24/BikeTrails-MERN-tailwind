import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import Admin from "./pages/admin/screens/Admin.jsx";
import Comments from "./pages/admin/screens/comments/Comments.jsx";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts.jsx";
import EditPost from "./pages/admin/screens/posts/EditPost.jsx";
import Categories from "./pages/admin/screens/categories/Categories.jsx";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/trail/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
