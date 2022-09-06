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
        position: "«Компьютерная безопасность», специалитет, красный диплом",
        location: "Калининград",
        startDate: new Date(2015, 8, 1),
        endDate: new Date(2022, 1, 1),
        description: "Тема диплома: «Защищённая отправка сообщений по mesh-сети на основе Bluetooth».<br/>" +
            "Изучал широкий набор дисциплин: от базового программирования " +
            "и алгоритмов до алгебраической геометрии, топологии и функциональных полей",
    }
];

export const educationEn: Education[] = [
    {
        school: "Immanuel Kant Baltic Federal University",
        position: "«Computer Security» — 5½ years long course — Specialist degree with honors",
        location: "Kaliningrad",
        startDate: new Date(2015, 8, 1),
        endDate: new Date(2022, 1, 1),
        description: "Thesis title: «Protected message sending in Bluetooth-based mesh networks».<br/>" +
            "Studied a wide range of disciplines: from basic programming and algorithms to algebraic geometry, " +
            "topology, and functional fields.",

    }
];
