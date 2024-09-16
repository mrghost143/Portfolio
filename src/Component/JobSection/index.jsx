import "./job.scss"
import { AosWrapper, SectionHeading, UnderHightlight } from "../Common/Wrapper"
import { useState } from "react";


const Job = () => {

  const CompanyInfoList = {
    "NeoSoft": {
      role: "Frontend Developer",
      duration: "Oct 2021 - present",
      workedOn: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Architected and implemented the user interface of Apple Music's embeddable web pla"
      ],
      companyUrl: "https://www.neosofttech.com/"  

    },
  }
  const [CompanyInfo, setCompanyInfo] = useState(Object.keys(CompanyInfoList)[0]);
  const companyUpdate = (element) => {
    setCompanyInfo("")

    setTimeout(() => {
      setCompanyInfo(element)

    }, 200);
  }
  const CompanyNavigate = (url) => {
    window.open(url, '_blank');
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
              {CompanyInfo && <span className="company-name highlight-text">@<UnderHightlight onClick={() => CompanyNavigate(CompanyInfoList?.[CompanyInfo]?.companyUrl)}>{CompanyInfo}</UnderHightlight></span>}

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