import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
// import Home from "./Pages/Home";
// import Header from "./Component/Header";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 700,
    //   easing: "ease-out-cubic",
    //   once: false,
    // });
    AOS.init();
    // AOS.refresh();
  }, []);
  const Home = lazy(() => import("./Pages/Home"));
  const Header = lazy(() => import("./Component/Header"));
  return (
    <Suspense fallback={"Loading"}  >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />    
      </Routes>
    </Suspense>
  )
}

export default App
