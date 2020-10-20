import React, {useContext} from 'react'
import {LangContext} from "../../data/translate";

const Footer = () => {

    const ctx = useContext(LangContext);

    return(
        <footer>
            <div className="footer-top">
                <p>{ctx.lang.FOOTER.become}</p>
                <a href="/">{ctx.lang.FOOTER.start_free}</a>
            </div>
            <div className="footer-bottom">
                <a href="/" className="logo">
                    <img src="/images/Group 23x.png" alt="logo"/>
                </a>
                <div className="menu-bottom">
                    <a href="/">{ctx.lang.FOOTER.contacts}</a>
                    <a href="/">{ctx.lang.FOOTER.privacy}</a>
                    <a href="/">{ctx.lang.FOOTER.terms}</a>
                </div>
            </div>
        </footer>
)
}

export default Footer;