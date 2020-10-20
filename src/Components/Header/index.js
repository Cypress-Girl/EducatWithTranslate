import React, {useContext} from 'react'
import {CONST_EN, CONST_RU, LangContext} from "../../data/translate";

function viewSelector(selector, displayValue){
    selector.style.display = displayValue;
}

function showHideSelector(){
    let selector = document.getElementById("langSelector");
    if(selector){
        let value = selector.style.display === "none" ? "flex" : "none";
        viewSelector(selector, value);
    }
}

function selectLanguage(lang, ctx){
    ctx.change(lang);
    let selector = document.getElementById("langSelector");
    if(selector)
        viewSelector(selector,"none");
}

const Header = () => {
    const ctx = useContext(LangContext);

    return (
        <header>
            <a href="/" className="logo">
                <img src="/images/Group 23x.png" alt="logo"/>
            </a>
            <div id="lang-container">
                <figure id="langLogo" onClick={showHideSelector}>
                    <img src="/images/Group 10.svg" alt="lang"/>
                    <span>{ctx.lang.HEADER.lang}</span>
                </figure>
                <figure id="langSelector" style={{display: "none"}}>
                    <span onClick={() => selectLanguage(CONST_RU, ctx)}>RU</span>
                    <span onClick={() => selectLanguage(CONST_EN, ctx)}>EN</span>
                </figure>
            </div>
        </header>
    )
}

export default Header;