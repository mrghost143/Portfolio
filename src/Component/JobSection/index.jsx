import "./job.scss"
import { AosWrapper, SectionHeading, UnderHightlight } from "../Common/Wrapper"
import { useState } from "react";


const Job = () => {

  const CompanyInfoList = {
    "Apple": {
      role: "Front end devloper",
      duration: "May 2022 - present",
      workedOn: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Architected and implemented the user interface of Apple Music's embeddable web pla"
      ]

    },
    "upstatement": {
      role: "Front end devloper",
      duration: "May 2022 - feb 2093",
      workedOn: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and morev",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
      ]

    },
    "random": {
      role: "Front end devloper",
      duration: "May 2022 - may 1998",
      workedOn: [
        "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    },
    "sdcs": {
      role: "Front end devloper",
      duration: "May 2022 - present",
      workedOn: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Architected and implemented the user interface of Apple Music's embeddable web pla"
      ]

    },
    "dfsd": {
      role: "Front end devloper",
      duration: "May 2022 - feb 2093",
      workedOn: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and morev",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
      ]

    },
    "wrger": {
      role: "Front end devloper",
      duration: "May 2022 - may 1998",
      workedOn: [
        "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    }, "sdsd": {
      role: "Front end devloper",
      duration: "May 2022 - present",
      workedOn: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Architected and implemented the user interface of Apple Music's embeddable web pla"
      ]

    },
    "wefwaefc": {
      role: "Front end devloper",
      duration: "",
      workedOn: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and morev",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
      ]

    },
    "aeve": {
      role: "Front end devloper",
      duration: "May 2022 - may 1998",
      workedOn: [
        "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    }
  }
  const [CompanyInfo, setCompanyInfo] = useState(Object.keys(CompanyInfoList)[0]);
  const companyUpdate = (element) => {
    setCompanyInfo("")

    setTimeout(() => {
      setCompanyInfo(element)

    }, 200);
  }

  return (
    <section id="job">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>Where I’ve Worked</SectionHeading>

        <div className="company">
          <ul className="company-list">
            {Object.keys(CompanyInfoList)?.map((companyName, index) => {
              return <li key={index} className={`${CompanyInfo === companyName ? "active" : ""}`} onClick={() => companyUpdate(companyName)}> {companyName}</li>
            })}
          </ul>
          <div className="company-para">
            <h3 className="company-heading">
              <div className="role">{CompanyInfoList?.[CompanyInfo]?.role}</div>
              {CompanyInfo && <span className="company-name highlight-text">@<UnderHightlight  onClick={() => console.log("helo")}>{CompanyInfo}</UnderHightlight></span>}

            </h3>
            <div className="duration">
              {CompanyInfoList?.[CompanyInfo]?.duration}
            </div>
            <ul className="company-info styled-list">
              {
                CompanyInfoList?.[CompanyInfo]?.workedOn.map((description, key) =>
                  <AosWrapper animation="fade-up" delay={(key + 1) * 100} type="list" key={key} >
                    {description}
                  </AosWrapper>
                )
              }
            </ul>
          </div>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Job