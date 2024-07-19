import { AosWrapper } from "../Common/Wrapper"
import "./stickyList.scss";
import { PiGithubLogoBold, PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
const StickyList = () => {
    return (
        <>

            <div className="position-left">
                <AosWrapper animation={"zoom-in"} delay={"1500"} anchor={"bottom left"} >
                    <ul className="socail-list sticky">
                        <li className="socail-list-item"><PiGithubLogoBold /></li>
                        <li className="socail-list-item"><PiInstagramLogoBold /></li>
                        <li className="socail-list-item"><PiFacebookLogoBold /></li>
                        <li className="socail-list-item"><PiLinkedinLogoBold /></li>
                    </ul>
                </AosWrapper>
            </div>

            <div className="position-right">
                <AosWrapper animation={"zoom-in"} delay={"1500"} anchor={"bottom right"} >
                    <p className="mail sticky">

                        <a href="mailto:bisht143ankit@gmail.com" className="mail-text" >bisht143ankit@gmail.com</a>

                    </p>
                </AosWrapper>
            </div>
            <footer>
                heolo
            </footer>



        </>
    )
}

export default StickyList