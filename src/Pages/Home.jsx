import About from "../Component/AboutSection"
import Contact from "../Component/ContactSection"
import Hero from "../Component/HeroSection"
import Job from "../Component/JobSection"
import Project from "../Component/ProjectSection"
import StickyList from "../Component/StickyList"
import { ErrorBoundary } from "../ErrorBoundary"

const Home = () => {



    return (
        <ErrorBoundary>
            <main className="main" >
                <Hero />
                <About />
                <Job />
                <Project />
                <Contact />
                <StickyList />

            </main>
        </ErrorBoundary>

    )
}

export default Home