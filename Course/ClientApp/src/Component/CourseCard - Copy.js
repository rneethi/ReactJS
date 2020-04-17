import React, { Component } from 'react';
class CourseCard extends Component {

    render() {

        return (
            <div>
                <div></div>
                <div className="courseCard">
                    <div>
                        <div >
                            <h3>Sofware Development Training</h3>
                            <span className="courCardHint fa fa-info-circle">Learners</span>
                            <span className="courCardHint fa fa-calendar">Time</span>
                            <span className="courCardHint  fa fa-film">Live/Offline</span>
                        </div>
                        <div>
                            <ul>
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Milk</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

export default CourseCard;