import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import React from "react";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Plans from "./pages/Plans";
import TermsServices from "./pages/TermsServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from './pages/BlogDetailPage';
import RedirectPage from "./components/RedirectPage";
import Navbar from "./components/Navbar";
import BlogData from "./pages/BlogData"; // Import BlogDetailPage

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/terms" element={<TermsServices />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogDetailPage />} />
                    <Route path="/blog-data" element={<BlogData />} />
                    <Route path="/redirect" element={<RedirectPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
