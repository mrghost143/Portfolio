import About from "../Component/AboutSection"
import Contact from "../Component/ContactSection"
import Hero from "../Component/HeroSection"
import Job from "../Component/JobSection"
import Project from "../Component/ProjectSection"
import StickyList from "../Component/StickyList"

const Home = () => {



    return (
            <main className="main container" >
                <Hero />
                <About />
                <Job />
                <Project />
                <Contact />
                <StickyList />

            </main>

    )
}

export default Home