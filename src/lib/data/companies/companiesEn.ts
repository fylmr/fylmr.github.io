import {Technologies} from "../technologies";
import type {Company} from "./companies";

let wrikeEn: Company = {
    companyName: "Wrike",
    location: "Kaliningrad (remotely)",
    startDate: new Date(2022, 0, 22),
    endDate: new Date(),
    projects: [
        {
            name: "Wrike",
            link: "https://www.wrike.com/",
            description: "Project management application",
            technologies: [
                "Multimodule architecture",
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

let buduEn: Company = {
    companyName: "Budu / Renaissance Health",
    location: "Kaliningrad (remotely)",
    startDate: new Date(2020, 11, 1),
    endDate: new Date(2022, 0, 22),
    projects: [
        {
            name: "Budu",
            link: "https://www.budu.ru/",
            description:
                "Telemedicine, doctor appointments, insurance managing.\n" +
                "Worked in the product teams, mostly focused on app monetization and acquiring new users. " +
                "Also worked with WebRTC, and solved video and audio call problems.",
            technologies: [
                "Multimodule architecture",
                Technologies.kotlin,
                Technologies.rxJava,
                Technologies.coroutines,
                Technologies.retrofit,
                Technologies.dagger,
                Technologies.mvp,
                Technologies.room,
                Technologies.webRtc,
            ],
        }
    ],
}

let eLegionEn: Company = {
    companyName: "e-Legion",
    location: "Kaliningrad (remotely)",
    startDate: new Date(2018, 9, 1),
    endDate: new Date(2020, 11, 1),
    projects: [
        {
            name: "Мой Tele2",
            link: "https://play.google.com/store/apps/details?id=ru.tele2.mytele2&hl=ru&gl=US",
            description: "The main application for a major Russian telecommunication company Tele2 " +
                "with more than 10 million users.\n" +

                "I've been working on the project since May 2019, " +
                "when the large redesign of the application began. " +
                "During this time, independently and with a team, " +
                "we implemented a lot of features of different business importance, " +
                "and won the national Roskachestvo ranking among mobile operators. " +
                "Inside the Android team, we've split up the team leader's responsibilities " +
                "to ensure that everyone is equally responsible: " +
                "we did cross-code reviews, attend the meetings, and reviewed and delegated tasks together.",
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
            name: "Other projects",
            link: null,
            description: "I also participated in two other company projects:" +
                " a smartwatch companion application and a social network app.",
            technologies: [],
        }
    ],
}

let itSpecialEn: Company = {
    companyName: "ITSpecial",
    location: "Kaliningrad",
    startDate: new Date(2018, 5, 1),
    endDate: new Date(2018, 9, 1),
    projects: [
        {
            name: "IDesk",
            link: "https://i-desk.pro/",
            description: "Having no previous working experience, " +
                "being the only mobile developer in the company, " +
                "I've created an Android application from scratch " +
                "and integrated it into the existing electronic system " +
                "for hotels and shopping centers. " +
                "We went from technical requirements and design handwritten " +
                "on a piece of paper to release and first sales\n" +
                "I also assisted on other projects, " +
                "made a microservice with Go language, and helped with a Unity project in C#",
            technologies: [],
        }
    ],
}

export let companiesEn: Company[] = [
    wrikeEn,
    buduEn,
    eLegionEn,
    itSpecialEn,
]
