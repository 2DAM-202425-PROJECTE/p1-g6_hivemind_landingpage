import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar.jsx";
import HeroSection from "./components/herosection.jsx";
import FeaturesSection from "./components/features.jsx";
import Testimonis from "./components/testimonis";
import TeamsSection from "./components/teams.jsx";
import Products from "./pages/Products.jsx";
import Contact from './pages/Contact.jsx';
import Footer from './components/footer.jsx';
import './index.css';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavigationBar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <HeroSection />
                                <Testimonis />
                                <TeamsSection />
                                <FeaturesSection />
                            </>
                        } />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;