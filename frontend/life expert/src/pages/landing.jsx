import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/landing.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Category from "../components/category";

const LandingPage = () => {
  const navigate = useNavigate();
  const user = null; // Replace with actual user state

  const handleLogin = () => navigate("/auth/login");
  const handleSignUp = () => navigate("/auth/signup");
  const handleLogout = () => navigate("/");
  const handleConnect = () => {
    // Handle connect action
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="header">
          <Header />
        </div>

        {/* Image section */}
        <div className="image-container">
          <img
            src="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
            alt="Cover"
          />

          <div className="overlay-content">
            <div className="text-container">
              <p className="mainLine">Unlock your potential</p>
              <p className="subLine">
                Get advice and guidance from life experts across a range of fields – all in one place.
              </p>
            </div>

            <div className="button-group">
              {user ? (
                <>
                  <span className="welcome-message">Hello, {user.name}</span>
                </>
              ) : (
                <>
                  <Button onClick={handleLogin}>Login</Button>
                  <Button onClick={handleSignUp} variant="light">Become an expert</Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="connect-btn">
          <Button onClick={handleConnect}>Connect with expert</Button>
        </div>

        <div className="categories">
          <div className="top-categories">
            <h3>Top categories</h3>
            <div className="category">
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Mental Health"
                />
              </div>
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Career advice"
                />
              </div>
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Dating & Relationships"
                />
              </div>
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Creativity & Hobbies"
                />
              </div>
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Parenting & Family"
                />
              </div>
              <div className="category-card">
                <Category
                  imageSrc="https://cdn.usegalileo.ai/sdxl10/57782853-3688-4d38-847a-418aed3164d1.png"
                  title="Personal Development"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="works">
          <h3>How it works</h3>
          <div className="step-1">
            <div className="svg-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <div className="text-1">
              <h4>Find the right expert</h4>
            </div>
          </div>

          <div className="step-2">
            <div className="svg-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <div className="text-2">
              <h4>Book a session</h4>
            </div>
          </div>

          <div className="step-3">
            <div className="svg-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
            </div>
            <div className="text-3">
              <h4>Get personalized advice</h4>
            </div>
          </div>
        </div>

        <div className="connect-btn">
          <Button onClick={handleConnect}>Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
