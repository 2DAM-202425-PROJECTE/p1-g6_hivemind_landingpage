import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar.jsx";
import HeroSection from "./components/herosection.jsx";
import FeaturesSection from "./components/features.jsx";
import NewsLetter from "./components/newsletter.jsx";
import Testimonis from "./components/testimonis";
import TeamsSection from "./components/teams.jsx";
import ProductsContent from './pages/Products.jsx';
import CTASection from './components/CTA.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/footer.jsx';
import Faqs from './components/faqs.jsx';
import CookieBanner from "./components/CookieBanner.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import './index.css';
import Register from "./pages/Register.jsx";

function App() {
    return (
        <Router>
                <NavigationBar />
                <CookieBanner />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroSection />
                                    <CTASection />
                                    <FeaturesSection />
                                    <NewsLetter />
                                    <Testimonis />
                                    <TeamsSection />
                                    <Faqs />
                                </>
                            }
                        />
                        <Route
                            path="/products"
                            element={<ProductsContent />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/terms-of-service"
                            element={<TermsConditions />}
                        />
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                    </Routes>
                <Footer />
        </Router>
    );
}

export default App;