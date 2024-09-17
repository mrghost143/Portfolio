import { AosWrapper } from "../Common/Wrapper"
import "./stickyList.scss";
import { PiGithubLogoBold, PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
const StickyList = () => {

    const socialLinkClick=(url)=>{
        window.open(url,"_blank")
    }
    return (
        <>
            <div className="position-left">
                <AosWrapper animation={"zoom-in"} delay={"1500"} anchor={"bottom left"} >
                    <ul className="socail-list sticky">
                        <li className="socail-list-item"  onClick={()=>socialLinkClick("https://github.com/mrghost143")}><PiGithubLogoBold /></li>
                        <li className="socail-list-item"  onClick={()=>socialLinkClick("https://www.instagram.com/_anki_bisht_/")}><PiInstagramLogoBold /></li>
                        <li className="socail-list-item" onClick={()=>socialLinkClick("https://www.facebook.com/ankitbisht143/")}><PiFacebookLogoBold /></li>
                        <li className="socail-list-item"  onClick={()=>socialLinkClick("https://www.linkedin.com/in/ankit-bisht-a179b3203/")}><PiLinkedinLogoBold /></li>
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
            <footer className="bright-text footer">
                <a href="https://github.com/mrghost143/Portfolio" className="bright-text" target="_blank" rel="noreferrer">Built and enhanced by Ankit Bisht</a>
                {/* <a href="https://github.com/bchiang7/v4" className="bright-text" target="_blank" rel="noreferrer">Designed by Brittany Chiang</a> */}
            </footer>
        </>
    )
}

export default StickyList