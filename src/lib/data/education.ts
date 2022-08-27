export interface Education {
    school: string;
    position: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
}

export const educationRu: Education[] = [
    {
        school: "Балтийский Федеральный Университет им. И. Канта",
        position: "«Компьютерная безопасность», диплом специалиста с отличием\n",
        location: "Калининград",
        startDate: new Date(2015, 9, 1),
        endDate: new Date(2022, 2, 1),
        description: "Тема диплома: «Защищённая отправка сообщений по mesh-сети на основе Bluetooth».\n" +
            "Изучал широкий набор дисциплин: от базового программирования " +
            "и алгоритмов до алгебраической геометрии, топологии и функциональных полей",
    }
];
