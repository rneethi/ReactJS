
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCourse from './AllCourses';
import SoftwareDevelopment from './SoftwareDevelopment';

export const courseList = [
    {
        CourseName: "All Courses",
        Id: "AL",
        Component: AllCourse
    }
    ,
    {
        CourseName: "Software Development",
        Id: "SD",
        Component: SoftwareDevelopment
    },
    {
        CourseName: "Software Testing",
        Id: "ST"
    },

    {
        CourseName: "DevOps",
        Id: "DevOps"
    },
    {
        CourseName: "DataBase",
        Id: "DB"
    }];

class CourseList extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul >
                        {courseList.map(i =>
                            <li className="menu" > <Link to={i.Id}>{i.CourseName} </Link> </li>)}
                    </ul>
                    <Switch>
                        <Route exact path='/AL' component={AllCourse} > </Route>
                        <Route exact path='/SD' component={SoftwareDevelopment} > </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default CourseList;