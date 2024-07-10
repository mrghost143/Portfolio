// import React from 'react'
import { AosWrapper, HightlightButton, UnderHightlight } from "../Common/Wrapper"
import "./hero.scss";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Hero = () => {

  // throw new Error('I crashed!');

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
          <UnderHightlight>
            Neosoft
          </UnderHightlight>.
        </p>
      </AosWrapper>
      <AosWrapper animation="fade-up" anchor="bottom-bottom" delay="1100">
        <HightlightButton>
          <PiDownloadSimpleBold />&nbsp;Resume
        </HightlightButton>
      </AosWrapper>
    </section>

  )
}

export default Hero