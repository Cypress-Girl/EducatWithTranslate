import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {LangContext, translate} from "./data/translate";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: translate.RU,
            change: this.changeLanguage
        }
    }

    changeLanguage = () => {
        let newLang = this.state.lang === translate.RU ? translate.EN : translate.RU;
        this.setState({
            lang: newLang,
        });
    }

    render() {
        return (
            <LangContext.Provider value={this.state}>
                <div className="App">
                    <Header/>
                    <Home/>
                    <Footer/>
                </div>
            </LangContext.Provider>
        );
    }
}

export default App;
