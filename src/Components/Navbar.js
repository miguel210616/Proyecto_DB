import React from 'react';
import logo from '../Images/Captura.PNG';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render(){
        return <div className='Navbar'>
            <div className="container-fluid">
            <a className="Navbar__brand" href='/'>
                <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                <span className="font-weight-light" >Serie</span>
                <span className="font-weinght-bold">Dark</span>
            </a>
            </div>
        </div>;
    }
}

export default Navbar;
