import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import './styles/style.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Main/>
                </div>
            </Router>
        );
    }
}

export default App;
