import { AosWrapper, HightlightButton, UnderHightlight } from "../Common/Wrapper"
import "./hero.scss";
import { PiDownloadSimpleBold } from "react-icons/pi";
import resume from "../../assets/DOC/Resume.pdf"

const Hero = () => {
  const resumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Ankit_Bisht_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="hero">
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="700">
        <h2 className="highlight-text heading-3">Hi, my name is</h2>
      </AosWrapper>
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="800">
        <h1 className="bright-text heading-1">Ankit Bisht.</h1>
      </AosWrapper>
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="900">
        <h3 className="heading-2">I build things for the web.</h3>
      </AosWrapper>
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="1000">
        <p className="intro">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I’m focused on building accessible, human-centered products at
          <UnderHightlight onClick={() => console.log("helo")}>
            Neosoft
          </UnderHightlight>.
        </p>
      </AosWrapper>
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="1100">
        <HightlightButton onClick={resumeDownload}>
          <PiDownloadSimpleBold />&nbsp;Resume
        </HightlightButton>
      </AosWrapper>
    </section>

  )
}

export default Hero