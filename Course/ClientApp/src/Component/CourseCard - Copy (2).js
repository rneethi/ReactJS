import React, { Component } from 'react';

import Default from '../Img/Image.jpg';
import Devops from '../Img/Devops.jpg';
import SoftwareTesting from '../Img/SoftwareTesting.png';
import PM from '../Img/PM.jpg';
import Angular from '../Img/Angular.svg';

class CourseCard extends Component {

    render() {

        return (
            <div>
                <div className="card">
                    <div className="courseCardChildDiv">
                        <img width="140" height="140" src={Default} />
                    </div>

                    <div className="courseCardChildDiv">

                        <div className="courseCardChildDiv">
                            <h3>Sofware Development Training</h3>
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
                            <div > <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <div className="courseCardChildDiv">
                        <img width="140" height="140" src={SoftwareTesting} />
                    </div>

                    <div className="courseCardChildDiv">

                        <div className="courseCardChildDiv">
                            <h3>Sofware Testing Training</h3>
                            <span className="courCardHint fa fa-info-circle">100K Learners</span>
                            <span className="courCardHint fa fa-calendar">Time</span>
                            <span className="courCardHint  fa fa-film">Live/Offline</span>
                            <ul>
                                <li>Overview of software Testing</li>
                                <li>Testing langauage </li>
                                <li>Additional overview</li>
                            </ul>
                        </div>
                        <div className="courseCardChildDiv">
                            <div > <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <div className="courseCardChildDiv">
                        <img width="140" height="140" src={Devops} />
                    </div>

                    <div className="courseCardChildDiv">

                        <div className="courseCardChildDiv">
                            <h3>Sofware Devops Training</h3>
                            <span className="courCardHint fa fa-info-circle">74KLearners</span>
                            <span className="courCardHint fa fa-calendar">Time</span>
                            <span className="courCardHint  fa fa-film">Live/Offline</span>
                            <ul>
                                <li>Overview of Devops </li>
                                <li>Devops enviroment </li>
                                <li>Additional overview</li>
                            </ul>
                        </div>
                        <div className="courseCardChildDiv">
                            <div > <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <div className="courseCardChildDiv">
                        <img width="140" height="140" src={PM} />
                    </div>

                    <div className="courseCardChildDiv">

                        <div className="courseCardChildDiv">
                            <h3>Sofware Project Management Training</h3>
                            <span className="courCardHint fa fa-info-circle">68K Learners</span>
                            <span className="courCardHint fa fa-calendar">Time</span>
                            <span className="courCardHint  fa fa-film">Live/Offline</span>
                            <ul>
                                <li>Overview of Project Management </li>
                                <li>Project Management </li>
                                <li>Additional overview</li>
                            </ul>
                        </div>
                        <div className="courseCardChildDiv">
                            <div > <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <div className="courseCardChildDiv">
                        <img width="140" height="140" src={Angular} />
                    </div>

                    <div className="courseCardChildDiv">

                        <div className="courseCardChildDiv">
                            <h3>Angular  Training</h3>
                            <span className="courCardHint fa fa-info-circle">68K Learners</span>
                            <span className="courCardHint fa fa-calendar">Time</span>
                            <span className="courCardHint  fa fa-film">Live/Offline</span>
                            <ul>
                                <li>Overview of Angular</li>
                                <li>Angular Component </li>
                                <li>Additional overview</li>
                            </ul>
                        </div>
                        <div className="courseCardChildDiv">
                            <div > <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked "></span>
                                <span class="fa fa-star checked "></span>
                                <span class="fa fa-star checked "></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default CourseCard;