import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import ClassList from "./components/ClassList/ClassList"
import Students from "./components/Student/Student"
import Contact from "./components/Contact/Contact"


export default (
    <switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classlist/:class" component={ClassList} />
        <Route path="/student/:id" component={Students} />
        <Route path="/about/contact" component={Contact}/>
    </switch>
)