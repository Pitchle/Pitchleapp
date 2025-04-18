import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import React from "react";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Plans from "./pages/Plans";
import TermsServices from "./pages/TermsServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/plans" element={<Plans/>}/>
                    <Route path="/terms" element={<TermsServices/>}/>
                    <Route path="/privacy" element={<PrivacyPolicy/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
