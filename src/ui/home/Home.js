import React, { Component } from "react";
import CVLink from "./CVLink";

class Home extends Component {

    render() {
        const homeData = this.props.homeData;
        return (
            <div class="mainBody mb-2">
                <h1>123: {homeData.ru.name}</h1>
                <CVLink data={homeData.ru} lang={"ru"} />
                <CVLink data={homeData.en} lang={"en"} />
            </div>
        );
    }
}

export default Home;