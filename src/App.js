import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Story from "./pages/Story";
import Plans from "./pages/Plans";
import TermsServices from "./pages/TermsServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {


    return (
        <>
            <main className="banner-bg">
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/story" element={<Story/>}/>
                        <Route path="/plans" element={<Plans/>}/>
                        <Route path="/terms" element={<TermsServices/>}/>
                        <Route path="/privacy" element={<PrivacyPolicy/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </main>
        </>
    );
}

export default App;
