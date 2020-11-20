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
                        <img src={logo} className='logo-mathly' alt='mathly'/>
                    </a> 
                </li>
                <span className='nav-links'>
                {MenuItems.map(item=>
                    <li key={item.objectID}>
                        <a href={item.url} className={item.cName}>
                        { item.icon
                            ? <img src={item.icon?item.icon:item.text} alt={item.title}></img>
                            : <span>{item.text}</span>
                        }    
                        </a>
                    </li>
                )}
                </span>
            </ul>
            
            </nav>
        </div>
        
    );
}