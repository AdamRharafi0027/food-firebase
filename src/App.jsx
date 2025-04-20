import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // No need to import Router here anymore
import { useAuth } from "./context/AuthContext";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Popular from "./Components/Popular/Popular";
import Menu from "./Components/Menu/Menu";
import SpecialDeals from "./Components/Special/SpecialDeals";
import Locations from "./Components/Location/Locations";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <>
              <Header />
              <Hero />
              <Popular />
              <Menu />
              <SpecialDeals />
              <Locations />
              <Contact />
              <Footer />
            </>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
