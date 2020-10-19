import React from 'react'
import DescriptBlock from "../DescriptBlock";

const FullstackDescription = () => {
    return (
        <section className="fullstack-description">
            <div className="price-and-date">
                <span>Цена курса: 4 650 ₽/мес</span>
                <span>Старт: 1 апреля</span>
                <span>Формат: Онлайн</span>
                <span>Длительность: 12 месяцев</span>
                <span>Уровень: с нуля</span>
            </div>
            <div className="fullstack-3-in-1">

                <DescriptBlock img={null}
                               caption="Разработчик полного цикла"
                               text="Fullstack — это разработчик полного цикла, который может создать из прототипа полноценный
                        продукт(сайт, интернет-магазин, онлайн-школа)."/>

                <DescriptBlock img={null}
                               caption="Frontend + Backend"
                               text="Fullstack-разработчик владеет как фронтенд (все то, что видит пользователь на экране,
                        например внешний вид сайта или веб-приложения), так и бэкенд (хранение и обработка данных,
                        например ваши лайки и комментарии в инстаграм)."/>

                <DescriptBlock img={null}
                               caption="Для новичков и специалистов"
                               text="Наш курс Fullstack — разработчик, подходит как новичкам, с нулевым знанием в этой области,
                        так и специалистам, которые хотят прокачать свои знания и обладать конкурентным
                        преимуществом на бирже труда."/>
            </div>

            <div className="video-container">
                <video src="./video/videoplayback.mp4" poster="./images/@_ DSC_8336.psd3x.png"
                       className="video-about" controls></video>
            </div>
        </section>
    )
}

export default FullstackDescription;