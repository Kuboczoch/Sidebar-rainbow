import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from "../Sites/Home";
import About from "../Sites/About";
import Games from "../Sites/Games";

class Main extends Component {
    render() {
        return (
            <main>
                <div className={"container"}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/games" component={Games}/>
                </div>
            </main>
        );
    }
}

export default Main;
