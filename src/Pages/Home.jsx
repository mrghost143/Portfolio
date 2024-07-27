import About from "../Component/AboutSection"
import Contact from "../Component/ContactSection"
import Hero from "../Component/HeroSection"
import Job from "../Component/JobSection"
// import Loader from "../Component/Loader"
import Project from "../Component/ProjectSection"

const Home = () => {



    return (<>

        {/* <Loader /> */}
        <Hero />
        <About />
        <Job />
        <Project />
        <Contact />
    </>)
}

export default Home