import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StickyList from "./Component/StickyList";
import Loader from "./Component/Loader";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
    AOS.refresh();
  }, []);


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const LazyComponent = (importFunc, ms = 1000) => {
    return lazy(() => Promise.all([
      importFunc(),
      delay(ms)
    ]).then(([moduleExports]) => moduleExports));
  };

  const Home = LazyComponent(() => import('./Pages/Home'));
  const Header = lazy(() => import("./Component/Header"));

  return (
    <Suspense fallback={<Loader />}  >
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
