import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";
import { ThemeContextProvider } from "./Contexts/Theme";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="dark:bg-black bg-pale-white max-w-screen  ">
          <Header />
          <HeroSection />
          <Carousel />
          <Pricing />
          <Support/>
          <Footer/>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
