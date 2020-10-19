import React, {useContext} from 'react'
import {LangContext} from "../../data/translate";

const FullstackInfo = () => {

    let ctx = useContext(LangContext);

    return(
        <section className="fullstack-info">
            <p>{ctx.lang.HOME.home_course}</p>

            <span className="html-css-javascript">HTML    CSS    Javascript    Typescript    React JS    Node JS    Express JS    MongoDB    Mongoose JS</span>

            <a href="#" className="fullstack-free-button">{ctx.lang.HOME.online_free}</a>

            <div className="rocket-container">
                <img src="/images/Group3x.png"/>
            </div>
        </section>
    )
}

export default FullstackInfo;