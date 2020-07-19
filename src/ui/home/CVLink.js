import React, { Component } from "react";

class CVLink extends Component {

    render() {
        const data = this.props.data;
        const lang = this.props.lang;
        return (
            <div className={`main main-${lang}`}>
                <h4>{data.name}</h4>
                <p>{data.job}</p>
                <p class="mt-2"><a href={`${data.cvLink}`}>{data.cvLinkTitle}</a></p>
            </div>
        );
    }
}

export default CVLink;