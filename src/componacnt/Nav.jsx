// import {Navbar , Nav, Container} from 'react-bootstrap' 
import React,{ useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'



function Nav(){

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);



    return(
        <nav>
            <div className="menubar">
                <div className="logo" >
                <i className='nav-toggle'onClick={handleClick}><GiHamburgerMenu/></i>

                    <h1>
                        PORTFOLIO
                    </h1>

                </div>
                <div className="menu">
                    <ul className={click ? "nav-menu" : "nav-active"}>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#About">ABOUT</a>
                        </li>
                        <li>
                            <a href="#Certificate">CERTIFICATE</a>
                        </li>
                        <li>
                            <a href="#Contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;