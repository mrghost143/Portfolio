import FeaturedImg from "../../assets/IMG/featuredImg.avif";
import { PiGithubLogoBold ,PiArrowSquareOutBold} from "react-icons/pi";
const FeaturedProject = (prop) => {
const   {align}=prop
  return (
    <div className={`featured ${align}`}>
      <div className="featured-img">
        <img src={FeaturedImg} alt="" />
      </div>
      <div className="featured-info">
        <h4 className='featured-heading highlight-text'>
          Featured Project
        </h4>
        <h3 className="featured-name">
          Halcyon Theme
        </h3>
        <p className="featured-description">
          A minimal, dark blue theme for VS Code,
          Sublime Text, Atom, iTerm,  and more.
          Available on Visual Studio Marketplace, Package Control,
          Atom Package Manager, and npm.
        </p>
        <ul className="spec-list">
          <li>React</li>
          <li>Node</li>
          <li>React</li>
          <li>Node</li>
          <li>React</li>
        </ul>
        <ul className="hyperlink-list">
          <li><PiGithubLogoBold/></li>
          <li><PiArrowSquareOutBold/></li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProject