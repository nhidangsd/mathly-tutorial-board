import React from 'react';
import MenuItems from './Navbar/MenuItems';
import './Navbar/Navbar.css';
import logo from './Navbar/images/mathly-logo.png';

export default function Navbar(){
    // const [clicked, setClicked] = useState(false);

    const handleClick = () => 0;

    return(
        <div className='navbar-bottom-line'>
            <nav className='NavbarItems'>
         
            <div className='menu-icon' onClick={handleClick}>
                
            </div>
            <ul className='menu-items'>
                <li className='navbar-logo'>
                    <a href='https://www.mathly.io/'>
                        <img src={logo} className='logo-mathly' alt='mathl'/>
                    </a> 
                </li>
                {MenuItems.map(item=>
                    <li key={item.objectID}>
                        <a href={item.url} className={item.cName}>
                            <img src={item.icon} alt={item.title}></img>
                        </a>
                    </li>
                )}
            </ul>
            
            </nav>
        </div>
        
    );
}