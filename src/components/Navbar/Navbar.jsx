import { useState } from 'react';
import './Navbar.scss';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Vimeo Logo" />
                    <span>Vimeo</span>
                </a>
                <a href="#">Home</a>  
                <a href="#">About</a>  
                <a href="#">Contact</a> 
                <a href="#">Agent</a> 
            </div>
            <div className="right">
                <a href="#">Sign in</a>
                <a href="#" className="register">Sign Up</a>
                <div className="menuIcon">
                    <img 
                        src="/menu.png" 
                        alt="Menu Icon" 
                        onClick={() => setOpen(prev => !prev)} 
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="#">Home</a>  
                    <a href="#">About</a>  
                    <a href="#">Contact</a> 
                    <a href="#">Agent</a>
                    <a href="#">Sign up</a>
                    <a href="#">Sign in</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
