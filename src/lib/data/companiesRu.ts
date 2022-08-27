import type {Company} from "./store";
import {Technologies} from "./technologies";

let wrikeRu: Company = {
    companyName: "Wrike",
    location: "Калининград (удалённо)",
    startDate: new Date(2022, 1, 22),
    endDate: null,
    projects: [
        {
            name: "Wrike",
            link: "https://www.wrike.com/",
            description: "Приложение для управления проектами",
            technologies: [
                "Многомодульная архитектура",
                Technologies.java,
                Technologies.kotlin,
                Technologies.kotlinMultiplatform,
                Technologies.compose,
                Technologies.coroutines,
                Technologies.retrofit,
                Technologies.dagger,
                Technologies.mvvm,
            ],
        }
    ],
}

let buduRu: Company = {
    companyName: "Budu / Ренессанс Здоровье",
    location: "Калининград (удалённо)",
    startDate: new Date(2020, 12, 1),
    endDate: new Date(2022, 1, 22),
    projects: [
        {
            name: "Budu",
            link: "https://www.budu.ru/",
            description: "Приложения для телемедицины, записи к врачу, управления ДМС.\n" +
                "Работал в продуктовых командах, занимался монетизацией, вовлечением пользователей. " +
                "Также работал над решением проблем видео- и аудио-звонков, плотно работал с WebRTC.",
            technologies: [
                "Многомодульная архитектура",
                Technologies.kotlin,
                Technologies.rxJava,
                Technologies.coroutines,
                Technologies.retrofit,
                Technologies.dagger,
                Technologies.mvp,
                Technologies.room,
            ],
        }
    ],
}

let eLegionRu: Company = {
    companyName: "e-Legion",
    location: "Калининград (удалённо)",
    startDate: new Date(2018, 10, 1),
    endDate: new Date(2020, 12, 1),
    projects: [
        {
            name: "Мой Tele2",
            link: "https://play.google.com/store/apps/details?id=ru.tele2.mytele2&hl=ru&gl=US",
            description: "Основное приложение для мобильного оператора Tele2 с более чем 10 миллионами пользователей.\n" +
                "Пришёл на проект, когда начался масштабный редизайн приложения. " +
                "За это время самостоятельно и с командой реализовали множество фич разной важности, " +
                "победили в рейтинге Роскачества среди мобильных операторов. " +
                "Внутри Андроид-команды разделили обязанности тимлида, чтобы все несли равную ответственность: " +
                "проводим кросс-код-ревью, по очереди ходим на митинги, вместе ревьюим и оцениваем задачи.",
            technologies: [
                Technologies.kotlin,
                Technologies.java,
                Technologies.coroutines,
                Technologies.rxJava,
                Technologies.koin,
                Technologies.retrofit,
                Technologies.mvp,
                Technologies.room,
                Technologies.googlePay,
            ],
        },
        {
            name: "Другие проекты",
            link: null,
            description: "Работал также над двумя другими проектами в компании: " +
                "приложением для связи с умными часами и социальной сетью.",
            technologies: [],
        }
    ],
}

let itSpecialRu: Company = {
    companyName: "ITSpecial",
    location: "Калининград",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 10, 1),
    projects: [
        {
            name: "IDesk",
            link: "https://i-desk.pro/",
            description: "Без предшествующего опыта работы, " +
                "будучи единственным мобильным разработчиком в компании, " +
                "создал с нуля приложение под Андроид и интегрировал его " +
                "в существующую электронную систему для гостиниц и торговых центров. " +
                "Прошёл путь от ТЗ и дизайна на тетрадном листе до релиза и первых продаж.\n" +
                "В свободное время помогал также на других проектах, " +
                "писал на Go для бэкенда и C# для VR-приложения на Unity.",
            technologies: [],
        }
    ],
}

export let companiesRu: Company[] = [
    wrikeRu,
    buduRu,
    eLegionRu,
    itSpecialRu,
]
