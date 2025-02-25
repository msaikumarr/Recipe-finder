import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile"; // Import Profile component
import { AuthProvider } from "./context/AuthContext"; // Wrap everything with AuthProvider
import Navbar from "./components/Navbar";
import UploadRecipe from "./pages/UploadRecipe";
import { RecipeProvider } from "./context/RecipeContext";
import RegionRecipes from "./pages/RegionRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import SearchResults from "./pages/SearchResults";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <RecipeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
            <Route path="/upload" element={<UploadRecipe />} />
            <Route path="/region/:state" element={<RegionRecipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
          <Footer />
        </RecipeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
