import './header.css';
import Logo from "../images/Butterfly_logo.svg";
import {useState} from 'react';

const Header = ()=>{
    const [headerToggle,setHeaderToggle] = useState(false);
    window.addEventListener("scroll", function(){
        if (window.scrollY > 0){
            setHeaderToggle(true);
        }
        else{
            setHeaderToggle(false);
        }
    })

    return(
        <div>
            <div className={`header ${headerToggle ? 'sticky' : ''} `}>
                <a href="#" className='logo'>
                    <img src={Logo} alt="logo" className="header_logo"></img>
                    <div className='header_name'>WEFUNDIT</div>
                </a>
                <ul className="header_tabs">
                    <li><a href="#" className="header_tab">HOME</a></li>
                    <li><a href="#" className="header_tab">ABOUT</a></li>
                    <li><a href="#" className="header_tab">VIEWS</a></li>
                </ul>
                <a href='#'><button className='header_button'>DONATE</button></a>
            </div>
        </div>
    );
}

export default Header;