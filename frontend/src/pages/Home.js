import React from "react";
import RegionSelector from "../components/RegionSelector";
import './explore.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="banner-section-bg-container d-flex justify-content-center flex-column">
        <div className="text-center">
          <h1 className="banner-heading mb-3">Get Delicious Food Recipes Anytime</h1>
          <p className="banner-caption mb-4">Eat Smart & Healthy</p>

        </div>
      </div>
      <div className="explore-recipes-section pt-5 pb-5" id="exploreRecipesSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="menu-section-heading">Explore Recipes</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-3 w-4">
              <div className="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Non-Veg Recipes</h1>
                <Link to="/category/non veg" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Veg Recipes</h1>
                <Link to="/category/veg" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Soup Recies</h1>
                <Link to="/category/soup" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Fish & Sea food Recipes</h1>
                <Link to="/category/fish and sea foods" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Main Course Recipes</h1>
                <Link to="/category/main course" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Fast Food Recipes</h1>
                <Link to="/category/fastfood" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Tiffin Recipes</h1>
                <Link to="/category/tiffin" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKAfs8IyCS2gjcgGL1LCtTlSw9W12_Xsd2g&s">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png"
                  className="menu-item-image w-100"
                />
                <h1 className="menu-card-title">Dessert Recipes</h1>
                <Link to="/category/breakfast" className="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="healthy-recipe-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                  className="healthy-food-section-img"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h1 className="healthy-recipe-section-heading">
                Fresh, Healthy, Organic, Delicious Ingredients for Your Recipes
              </h1>
              <p className="healthy-recipe-section-description">
                Say goodbye to harmful chemicals and embrace the goodness of organic produce.
                Our platform offers a collection of fresh, healthy, and organic fruits and vegetables
                that bring the authentic flavors of nature to your kitchen. Pamper your body and taste
                buds with the purest ingredients, perfect for creating delicious and wholesome recipes that nourish
                both the body and soul. Share, cook, and enjoy the true gifts of Mother Nature with every dish!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="save-recipe-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-md-none">
              <div className="text-center">
                <img
                  src="https://www.shutterstock.com/image-photo/caucasian-man-using-laptop-kitchen-260nw-1014561532.jpg "
                  className="healthy-food-section-img"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h1 className="save-recipe-section-heading">
                Save Your Favorite Recipes
              </h1>
              <p className="save-recipe-section-description">
                With our platform, you can easily save all the recipes you love! Whether
                it’s a family favorite or a new discovery, simply bookmark it to create your personal recipe collection.
                Never lose track of your go-to dishes again, and access them anytime to recreate your culinary masterpieces.
              </p>
            </div>
            <div className="d-none d-md-block col-md-5">
              <div className="text-center">
                <img
                  src="https://www.shutterstock.com/image-photo/caucasian-man-using-laptop-kitchen-260nw-1014561532.jpg "
                  className="healthy-food-section-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="healthy-recipe-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                  className="healthy-food-section-img"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h1 className="healthy-recipe-section-heading">
                Share Your Recipes with the World
              </h1>
              <p className="healthy-recipe-section-description">
                Become a part of our vibrant community by sharing your unique recipes with others.
                From traditional family secrets to innovative dishes,
                you can inspire fellow food lovers. Spread the joy of cooking by contributing your culinary creations
                and connect with people who share your passion for food.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="save-recipe-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-md-none">
              <div className="text-center">
                <img
                  src="https://www.shutterstock.com/image-photo/caucasian-man-using-laptop-kitchen-260nw-1014561532.jpg "
                  className="healthy-food-section-img"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h1 className="save-recipe-section-heading">
                Upload Your Recipes and Get Creative
              </h1>
              <p className="save-recipe-section-description">
                Got a delicious recipe that’s waiting to be discovered? Upload it easily and showcase your creativity!
                Share step-by-step instructions, photos, and tips to help others bring your recipe to life. Our platform
                is designed to make uploading recipes simple and enjoyable, so you can focus on what you do best—cooking!
              </p>
            </div>
            <div className="d-none d-md-block col-md-5">
              <div className="text-center">
                <img
                  src="https://www.shutterstock.com/image-photo/caucasian-man-using-laptop-kitchen-260nw-1014561532.jpg "
                  className="healthy-food-section-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
