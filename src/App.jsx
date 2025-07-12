import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import { ThemeContextProvider } from "./Contexts/Theme";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="dark:bg-black bg-pale-white w-screen h-screen">
          <Header />
          <HeroSection />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
