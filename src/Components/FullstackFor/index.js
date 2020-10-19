import React from 'react';
import "../../App.css";
import DescriptBlock from "../DescriptBlock";

const FullstackFor = () => {
    return (
        <section className="fullstack-for">
            <p className="for-caption">Для кого курс</p>

            <div className="for-3-in-1">

                <DescriptBlock img={<img src="./images/Group 30@3x.png" className="first-img"/>}
                               caption="Желающим быстро войти в сферу разработки"
                               text="Каждый этап курса Fullstack developer — это специальность. Уже через месяц занятий вы можете
                начинать разрабатывать интерфейсы на HTML5 и CSS, а через полгода стать полноценным Frontend
                разработчиком."/>

                <DescriptBlock img={<img src="./images/Group 27@3x.png" className="second-img"/>}
                               caption="Начинающим разработчикам"
                               text="Уже были попытки обучения в сфере web разработки, но не хватило мотивации? У нас скучно не
                        будет. Вы начнете делать свой реальный проект с первого дня обучения."/>

                <DescriptBlock img={<img src="./images/Group 31@3x.png" className="third-img"/>}
                               caption="IT специалистам"
                               text="Возможно вы уже наши коллеги, но из другой сферы разработки. Этот курс позволит вам изучить
                        современные фреймворки и методы разработки клиент-серверных веб приложений."/>

            </div>
        </section>
    )
}

export default FullstackFor;