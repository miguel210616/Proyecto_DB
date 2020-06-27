import React from 'react';
import conflogo from '../Images/Series_Dark.png';
import photo_me from '../Images/dark.jpg';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className = "Badge__header">
                <img src={conflogo} alt="Logo mano"/>
            </div>

            <div className = "Badge__section-name">
                <img className="Badge__avatar" src={this.props.photo} alt="Avatar"/>
            <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className = 'Badge__section-info'>
                <h3>{this.props.jobTitle}</h3>
                <di>@{this.props.twitter}</di>
            </div>

            <div className = "Badge__footer">
                #platziconf
            </div>
        </div>;
    }

}

export default Badge;