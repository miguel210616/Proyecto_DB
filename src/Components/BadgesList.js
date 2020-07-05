import React, { Component } from 'react';

class BadgesList extends React.Component {

    render(){
        return (
            <ul className="list-unstyled">
                                {this.props.badges.map((badge)=> {
                                    return(
                                        <div className="Badge__container">
                                            <li key={badge.id}>
                                                <p>{badge.firstName} {badge.lastName}</p>
                                                <p>{badge.email}</p>
                                                <p>{badge.jobTitle}</p>
                                            </li>
                                        </div>
                                        
                                    )
                                })}
                            </ul>
        )
    }
}

export default BadgesList