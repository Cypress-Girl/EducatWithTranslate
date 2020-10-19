import React from 'react';

export const LangContext = React.createContext(null);

export const translate = {
    RU:{
        HEADER: {
            lang: "RU",
        },
        HOME: {
            home_course: "Fullstack\nвеб-разработчик",
            online_free: "Начать онлайн курс бесплатно",
            price: "Цена курса: 4 650 ₽/мес",
            begin: "Старт: 1 апреля",
            format: "Формат: Онлайн",
            duration: "Длительность: 12 месяцев",
            level: "Уровень: с нуля",

            descript_block: [
                {
                    caption: "Разработчик полного цикла",
                    text: "Fullstack — это разработчик полного цикла, который может создать из прототипа полноценный продукт(сайт, интернет-магазин, онлайн-школа).",
                },
                {
                    caption: "Frontend + Backend",
                    text: "Fullstack-разработчик владеет как фронтенд (все то, что видит пользователь на экране, например внешний вид сайта или веб-приложения), так и бэкенд (хранение и обработка данных, например ваши лайки и комментарии в инстаграм).",
                },
                {
                    caption: "Для новичков и специалистов",
                    text: "Наш курс Fullstack — разработчик, подходит как новичкам, с нулевым знанием в этой области, так и специалистам, которые хотят прокачать свои знания и обладать конкурентным\nпреимуществом на бирже труда.",
                }
            ],

            for_caption: "Для кого курс",

            for_whom: [
                {
                    img: "./images/Group 30@3x.png",
                    caption: "Желающим быстро войти в сферу разработки",
                    text: "Каждый этап курса Fullstack developer — это специальность. Уже через месяц занятий вы можете начинать разрабатывать интерфейсы на HTML5 и CSS, а через полгода стать полноценным Frontend разработчиком.",
                },
                {
                    img: "./images/Group 27@3x.png",
                    caption: "Начинающим разработчикам",
                    text: "Уже были попытки обучения в сфере web разработки, но не хватило мотивации? У нас скучно не будет. Вы начнете делать свой реальный проект с первого дня обучения.",
                },
                {
                    img: "./images/Group 31@3x.png",
                    caption: "IT специалистам",
                    text: "Возможно вы уже наши коллеги, но из другой сферы разработки. Этот курс позволит вам изучить современные фреймворки и методы разработки клиент-серверных веб приложений.",
                }
            ],


        },
        FOOTER: {
            become: "Стань профессионалом в веб-разработке",
            contacts: "Контакты",
            privacy: "Политика конфиденциальности",
            terms: "Условия предоставления услуг",
            start_free: "Начать бесплатно",
        }
    },

    EN:{
        HEADER: {
            lang: "EN",
        },
        HOME: {
            home_course: "Fullstack\nweb developer",
            online_free: "Start online course for free",
            price: "Price: 4 650 ₽/month",
            begin: "Start: April 1",
            format: "Format: Online",
            duration: "Duration: 12 months",
            level: "Level: from scratch",

            descript_block: [
                {
                    caption: "Fullstack developer",
                    text: "Fullstack — this is a fullstack developer who can create a full-fledged from the prototype product (website, online store, online school).",
                },
                {
                    caption: "Frontend + Backend",
                    text: "The full stack developer owns both the front end (everything that the user sees on the screen, such as the appearance of a site or web application) and the back end (storing and processing data, such as your likes and comments on Instagram).",
                },
                {
                    caption: "For beginners and specialists",
                    text: "Our Fullstack course is a developer, suitable as beginners, with zero knowledge in this area, and specialists who want to pump their knowledge and have a competitive an advantage on the labor exchange.",
                }
            ],

            for_caption: "For whom this course",

            for_whom: [
                {
                    img: "./images/Group 30@3x.png",
                    caption: "Those who want to quickly enter the field of development",
                    text: "Each stage of the Fullstack developer course is a specialty. After a month of classes, you can start developing interfaces on HTML5 and CSS, and in six months you can become a full-fledged Frontend developer.",
                },
                {
                    img: "./images/Group 27@3x.png",
                    caption: "To beginning developers",
                    text: "There have already been attempts at training in the field of web development, but did not have enough motivation? We won't be bored. You will start making your real project from the first day of training.",
                },
                {
                    img: "./images/Group 31@3x.png",
                    caption: "IT specialist",
                    text: "You may already be our colleagues, but from another area of development. This course will allow you to learn modern frameworks and methods for developing client-server web applications.",
                }
            ],

        },
        FOOTER: {
            become: "Become a Web Development Professional",
            contacts: "Contacts",
            privacy: "Privacy policy",
            terms: "Terms of Service",
            start_free: "Start for free",
        }
    }
}