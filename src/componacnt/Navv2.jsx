// import Nav from 'react-bootstrap/Nav'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar'
import './cus'
import {Navbar , Nav, Container} from 'react-bootstrap' 


function Navv2(){

    const bar = document.querySelector(".bar");
bar.onclick = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav");
};

    return(
        <div className="Navv2">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="#">ZALAZ</a>
                </div>
                <a href="#" class="bar">
                    <i class="fas fa-bars"></i>
                </a>
                <nav>
                <ul>
                    <li><a href="">Hot & Sale</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Payment</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}
export default Navv2