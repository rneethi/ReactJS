import React, { Component } from 'react';

import Default from '../Img/Image.jpg';
import Devops from '../Img/Devops.jpg';
import SoftwareTesting from '../Img/SoftwareTesting.png';
import PM from '../Img/PM.jpg';
import Angular from '../Img/Angular.svg';
import courseData from '../Data/CourseData';

class CourseCard extends Component {

    render() {
        return (
            <div>
                {
                    courseData.map((i) => {
                        return (
                            <div className="card" key={i.Id}>
                                <div className="courseCardChildDiv">
                                    <img width="140" height="140" src={i.image} />
                                </div>
                                <div className="courseCardChildDiv">
                                    <h3>
                                        {i.courseName}</h3>
                                    <span className="courCardHint fa fa-info-circle">56K Learners</span>
                                    <span className="courCardHint fa fa-calendar">Time</span>
                                    <span className="courCardHint  fa fa-film">Live/Offline</span>
                                    <ul>
                                        <li>Overview of software development</li>
                                        <li>Programing langauage </li>
                                        <li>Additional overview</li>
                                    </ul>
                                </div>
                                <div className="courseCardChildDiv">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                                <div className="showDetailedViewDefault showDetailedView">
                                    Im Dedailed view </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default CourseCard;