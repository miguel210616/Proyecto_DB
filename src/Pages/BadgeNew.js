import React from 'react';
import Navbar from '../Components/Navbar';
import header from '../Images/consulta.PNG';
//import './styles/BadgeNew.css';
import './styles/BadgeNew.css';
import Badge from '../Components/badge';
import BadgeForm from '../Components/BadgeForm';
import photo_1 from '../Images/dark.jpg';

class BadgeNew extends React.Component {
    state = {form:{}};
    render(){
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className="img-fluid" src={header} alt='Logo'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Miguel" lastName="Inga" twitter="miguel" jobTitle="Desarrolador" photo="https://indiehoy.com/wp-content/uploads/2019/06/dark-1-681x429.jpg" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;