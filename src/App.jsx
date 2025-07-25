import "./App.css";
import "./index.css"
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { useState } from "react";
import { MobileMenu } from "./components/sections/MobileMenu.jsx"
import { Navbar } from "./components/sections/Navbar.jsx";
import { Home } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Footer } from "./components/sections/Footer.jsx";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* <div className="w-100 h-100 border border-white flex flex-col items-center justify-center">
        <h1 className="animate-none">|</h1>

      </div> */}
    </>
  );
}

export default App
