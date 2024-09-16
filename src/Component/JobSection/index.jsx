import "./job.scss"
import { AosWrapper, SectionHeading, UnderHightlight } from "../Common/Wrapper"
import { useState } from "react";


const Job = () => {

  const CompanyInfoList = {
    "NeoSoft": {
      role: "Frontend Developer",
      duration: "Oct 2021 - present",
      workedOn: [
        "Boosted application performance and scalability with best practices in state management and architecture. Optimized state management using React Hooks and middleware for a smoother user experience.",
        "Converted wireframes and prototypes into functional interfaces in collaboration with UX/UI designers. Seamlessly integrated APIs with backend systems to ensure effective frontend-backend communication.",
        "Aligned UI components with backend services for consistent data flow and improved application reliability. Reduced load times and enhanced interactions through advanced performance optimization techniques.",
        "Utilized code splitting, lazy loading, and memoization to improve load times and runtime efficiency. Conducted performance audits with Lighthouse to identify and address bottlenecks."
      ],
      companyUrl: "https://www.neosofttech.com/"
    },
    "Bajaj": {
      role: "React Developer (Client)",
      duration: "Jun 2022 - present",
      workedOn: [
        "This platform aimed to offer a secure and user-friendly online experience for completing KYC requirements, ensuring compliance with regulatory standards. For the E-KYC platform, I designed and developed reusable React components, including form inputs, verification steps, and user feedback elements, contributing to a consistent and scalable UI.",
        "I integrated the platform with backend services and third-party APIs for document uploads and data validation, using Axios for HTTP requests and API interactions. To ensure the security of sensitive user information, I implemented client-side validation and encryption techniques to protect data during the onboarding process.",
        "Additionally, I developed a telecaller support system with a dedicated React.js dashboard, enabling telecallers to monitor onboarding processes, view client statuses, and access real-time issue reports. This dashboard included tools for telecallers to view client details, track progress, and provide immediate assistance, improving customer experience and reducing onboarding friction.",
        "Beyond E-KYC, I contributed to an Identity Access Management (IAM) system for optimizing user roles, permissions, and authentication, ensuring robust security and efficient user management. I also worked on a Risk Management (RM) Portal, providing tools for risk assessment, tracking, and reporting to enhance the organization’s risk management capabilities."
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