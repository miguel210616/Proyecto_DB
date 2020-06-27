import React from 'react';
import Navbar from '../Components/Navbar';
import header from '../Images/badge-header.svg';
//import './styles/BadgeNew.css';
import './styles/BadgeNew.css';
import Badge from '../Components/badge';
import photo_1 from '../Images/dark.jpg';

class BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className="img-fluid" src={header} alt='Logo'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Miguel" lastName="Inga" twitter="mikitp" jonTitle="ML developer" photo="https://indiehoy.com/wp-content/uploads/2019/06/dark-1-681x429.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;