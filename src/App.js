import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import React from "react";
import Footer from "./components/Footer";
import TermsServices from "./pages/TermsServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from './pages/BlogDetailPage';
import RedirectPage from "./components/RedirectPage";
import Navbar from "./components/Navbar";
import BlogData from "./pages/BlogData";
import Plan from "./pages/Plan";
import ScrollToTop from "./components/ScrollToTop"; // Import BlogDetailPage

function App() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plans" element={<Plan />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/terms" element={<TermsServices />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogDetailPage />} />
                    <Route path="/blog-data" element={<BlogData />} />
                    <Route path="/redirect" element={<RedirectPage />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
