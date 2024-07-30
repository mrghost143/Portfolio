import { PiGithubLogoBold, PiArrowSquareOutBold } from "react-icons/pi";
const FeaturedProject = (prop) => {
  const { dataProp } = prop;
  const { projectName, projectDesc, projectSpecList, align, img } = dataProp

  return (
    <div className={`featured ${align}`}>
      <div className="featured-img">
        <img src={img} alt="" />
      </div>
      <div className="featured-info">
        <h4 className='featured-heading highlight-text'>
          Featured Project
        </h4>
        <h3 className="featured-name">
          {projectName}
        </h3>
        <p className="featured-description">
          {projectDesc}
        </p>
        <ul className="spec-list">
          {projectSpecList.map((item) => <li>{item}</li>)}
        </ul>
        <ul className="hyperlink-list">
          <li><PiGithubLogoBold /></li>
          <li><PiArrowSquareOutBold /></li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProject