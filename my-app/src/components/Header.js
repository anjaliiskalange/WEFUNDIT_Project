import './header.css';

const Header = ()=>{
    return(
        <div>
            <div className="header">
                <ul className="header_tabs">
                    <li><a href="#" className="header_tab">HOME</a></li>
                    <li><a href="#" className="header_tab">ABOUT</a></li>
                    <li><a href="#" className="header_tab">VIEWS</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;