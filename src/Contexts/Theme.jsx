import { children, createContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [demo, setDemo] = useState(false);
  const homeHeaderRef = useRef();
  const [headerHeight, setHeaderHeight] = useState("");

  const [aRatio, setARatio] = useState("1:1");
  const [format, setFormat] = useState("jpg");
  const [numImages, setNumImages] = useState(1);
  const [denoisingSteps, setDenoisingSteps] = useState(4);
  const [seed, setSeed] = useState("");
  const [outputQuality, setOutputQuality] = useState(80);
  const [disableSafetyChecker, setDisableSafetyChecker] = useState(false);
  const [goFast, setGoFast] = useState(true);
  const [prompt, setPrompt] = useState("");

  /////////////////////resize width//////////////////////////
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  /////////////////////////////////////////////////////////////

  //////////////////////////theme///////////////////////////////

  const [theme, setTheme] = useState(
    (localStorage.getItem("theme") == "dark" ? true : false) || false
  );

  const ref = useRef(null);
  const toggleDarkMode = async () => {
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(!theme);

      return;
    }
    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(!theme);
        localStorage.setItem("theme", !theme ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${
            top + height / 2
          }px)`,
        ],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /////////////////////////////////////////////////////////////

  const values = {
    windowWidth,
    theme,
    setTheme,
    ref,
    toggleDarkMode,
    demo,
    setDemo,
    headerHeight,
    setHeaderHeight,
    homeHeaderRef,
    aRatio,
    setARatio,
    format,
    setFormat,
    numImages,
    setNumImages,
    denoisingSteps,
    setDenoisingSteps,
    seed,
    setSeed,
    outputQuality,
    setOutputQuality,
    disableSafetyChecker,
    setDisableSafetyChecker,
    goFast,
    setGoFast,
    prompt,
    setPrompt,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
