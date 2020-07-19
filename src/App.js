import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Home from "./ui/home/Home.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    render() {

        const homeData = {
            ru: {
                name: "Филипп Максимов",
                job: "Android-разработчик",
                cvLinkTitle: "Моё резюме на русском",
                cvLink: "cv-ru.html",
            },
            en: {
                name: "Filipp Maksimov",
                job: "Android-developer",
                cvLinkTitle: "My CV in English",
                cvLink: "cv-ru.html",
            }
        }

        return (
            <Router>
                <Route exact path="/">
                    <Home homeData={homeData} />
                </Route>
            </Router>
        );
    }
}

export default hot(module)(App);