import React from 'react';
import "../../App.css";
const FullstackFor = () => {
    return (
        <section className="fullstack-for">
            <p className="for-caption">Для кого курс</p>

            <div className="for-3-in-1">
                <figure className="descript-block">
                    <div className="for-container">
                        <img src="./images/Group 30@3x.png" className="first-img"/>
                    </div>
                    <p className="descript-caption height64">Желающим быстро войти в сферу разработки</p>
                    <p className="descript-text">
                        Каждый этап курса Fullstack developer — это специальность. Уже через месяц занятий вы можете
                        начинать разрабатывать интерфейсы на HTML5 и CSS, а через полгода стать полноценным Frontend
                        разработчиком.
                    </p>
                </figure>
                <figure className="descript-block">
                    <div className="for-container">
                        <img src="./images/Group 27@3x.png" className="second-img"/>
                    </div>
                    <p className="descript-caption height64">Начинающим разработчикам</p>
                    <p className="descript-text">
                        Уже были попытки обучения в сфере web разработки, но не хватило мотивации? У нас скучно не
                        будет. Вы начнете делать свой реальный проект с первого дня обучения.
                    </p>
                </figure>
                <figure className="descript-block">
                    <div className="for-container">
                        <img src="./images/Group 31@3x.png" className="third-img"/>
                    </div>
                    <p className="descript-caption height64">IT специалистам</p>
                    <p className="descript-text">
                        Возможно вы уже наши коллеги, но из другой сферы разработки. Этот курс позволит вам изучить
                        современные фреймворки и методы разработки клиент-серверных веб приложений.
                    </p>
                </figure>
            </div>
        </section>
    )
}

export default FullstackFor;