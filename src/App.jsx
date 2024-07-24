import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StickyList from "./Component/StickyList";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
    AOS.refresh();
  }, []);
  const Home = lazy(() => import("./Pages/Home"));
  const Header = lazy(() => import("./Component/Header"));
  return (
    <Suspense fallback={"Loading"}  >
      <Header />
      <main className="main container" >
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <StickyList />
      </main>
    </Suspense>
  )
}

export default App
