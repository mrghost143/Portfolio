import { AosWrapper, HightlightButton, SectionHeading, UnderHightlight } from "../Common/Wrapper";
import { TbSquareRoundedArrowDown, TbSquareRoundedArrowUp } from "react-icons/tb";
import "./project.scss";
import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject";
import { useRef, useState } from "react";

const add = [{
  link: { github: "adcbkjadca", website: "csdcuwbjc" },
  name: "ankit bisht",
  desc: "Adcadcsdcv sdvhsgdyfucgjb usydgcjhbsd vjuysfdvf csd",
  techStack: ["sdvsv", "dcsdv", "sdi8qeuias"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
}
]
const more = [{
  link: { github: "adcbkjadca", website: "csdcuwbjc" },
  name: "ankit bisht",
  desc: "Adcadcsdcv sdvhsgdyfucgjb usydgcjhbsd vjuysfdvf csd",
  techStack: ["sdvsv", "dcsdv", "sdi8qeuias"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "sfvdfv  asfas",
  desc: "Adcadcsdcv sdvfajs uu hskgkajs hgegjhgekjsd,h ewiurk gkesrug oseiruldkfgh oiesukrdjfghbei wrukg",
  techStack: ["sdvsfv", "Sdvkjjuisdzf", "sdgcfuaytsjdghz", "asgdfcuwegy"]
}
]


const Project = () => {
  const [show, setShow] = useState(false);
  const scrollRef = useRef(null);
  const showBtnClick = () => {
    setShow(!show);

    setTimeout(() => {
      if (show) {
        scrollRef.current.scrollIntoView();
      }
    }, 10);

  }
  return (
    <section id="project">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>Some Things I’ve Built</SectionHeading>
        <div className="featured-wrapper">
          <FeaturedProject align={"right"} />
          <FeaturedProject align={"left"} />
          <FeaturedProject align={"right"} />
        </div>
        <div className="other-project">
          <div className="other-head-wrapper">
            <h3 className="other-heading">Other Noteworthy Projects</h3>
            <div>
              <UnderHightlight classToAdd={"other-subheading"} onClick={() => console.log("helo")}>view the archive</UnderHightlight> </div>
          </div>

          <ul className="other-project-list" ref={scrollRef}>
            {
              add.map((item, key) => {
                return <li className="other-project-list-item" key={key}>
                  <AosWrapper animation="fade-up" anchor="bottom-bottom">
                    <OtherProject data={item} />
                  </AosWrapper>
                </li>
              })
            }
            {
              show && more.map((item, key) => {
                return <li className="other-project-list-item" key={key}>
                  <AosWrapper animation="fade-up" anchor="bottom-bottom">
                    <OtherProject data={item} />
                  </AosWrapper>
                </li>
              })
            }
          </ul>
          <div className="btn-wrapper">
            <HightlightButton onClick={showBtnClick}>
              {!show ? <>Show<TbSquareRoundedArrowDown /></> : <>Hide<TbSquareRoundedArrowUp /></>}
            </HightlightButton>
          </div>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Project