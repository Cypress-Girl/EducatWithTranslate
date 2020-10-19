import React from 'react'

const Footer = () => {
    return(
        <footer>
            <div className="footer-top">
                <p>Стань профессионалом в веб-разработке</p>
                <a href="#">Начать бесплатно</a>
            </div>
            <div className="footer-bottom">
                <a href="./index.html" className="logo">
                    <img src="/images/Group 23x.png"/>
                </a>
                <div className="menu-bottom">
                    <a href="#">Контакты</a>
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">Условия предоставления услуг</a>
                </div>
            </div>
        </footer>
)
}

export default Footer;