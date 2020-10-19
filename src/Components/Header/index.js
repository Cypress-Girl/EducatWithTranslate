import React, {useContext} from 'react'
import {LangContext} from "../../data/translate";

const Header = () => {
    const ctx = useContext(LangContext);

    return(
        <header>
            <a href="#" className="logo">
                <img src="/images/Group 23x.png"/>
            </a>
            <div className="lang" onClick={ctx.change}>
                <img src="/images/Group 10.svg"/>
                    <span>{ctx.lang.HEADER.lang}</span>
            </div>
        </header>
)
}

export default Header;