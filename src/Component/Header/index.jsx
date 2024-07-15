import { useState } from 'react';
import "./header.scss";
import useScrollDirection from '../../CustomHook/useScrollDirection';
import { AosWrapper } from '../Common/Wrapper';
import { useEffect } from 'react';
import { useWindowSize } from '../../CustomHook/useWindowSize';
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";


const Header = () => {
    const direction = useScrollDirection();
    const [isMenu, setisMenu] = useState(false);
    const [width] = useWindowSize()
    useEffect(() => {
        if (width < 768 && isMenu) {
            document.getElementsByTagName('body')[0].classList.add("hideOverflow")
        } else {
            document.getElementsByTagName('body')[0].classList.remove("hideOverflow")
        }
    }, [width, isMenu])
    return (

        <header
            className={`header container  ${direction === "down" ? "scaleUp" : ""}`}>
            <AosWrapper animation="fade-down" delay="100">
                <div className="header-logo">
                    <a href="/#hero"> AB</a>
                </div>
            </AosWrapper>
            <AosWrapper animation="fade-down" delay="200">
                <button className="menu" type='button' onClick={() => setisMenu(true)}>
                    <TbMenuDeep />
                </button>
            </AosWrapper>


            <nav className={`header-nav ${isMenu ? "show" : "hide"}`}>
                <button className="close" type='button' onClick={() => setisMenu(false)}>
                    <IoCloseOutline />
                </button>
                <ul className="header-nav-list">

                    <li className="header-nav-item">
                        <AosWrapper animation="fade-down" delay="200">
                            <a href="/#about" className='bottom-hightlight'>About Me</a>
                        </AosWrapper>
                    </li>

                    <li className="header-nav-item">
                        <AosWrapper animation="fade-down" delay="300">
                            <a href="/#job" className='bottom-hightlight'>Skills</a>
                        </AosWrapper>
                    </li>
                    <li className="header-nav-item">
                        <AosWrapper animation="fade-down" delay="400">
                            <a href="/#project" className='bottom-hightlight'>Project</a>
                        </AosWrapper>
                    </li>
                    <li className="header-nav-item">
                        <AosWrapper animation="fade-down" delay="500">
                            <a href="/#contact" className='bottom-hightlight'>Contact Me</a>
                        </AosWrapper>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header