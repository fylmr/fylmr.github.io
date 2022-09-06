export interface Contact {
    serviceName: string;
    serviceLink: string;
    value: string;
}

export interface Header {
    name: string;
    job: string;
    birthDate: Date;
    yearsOldTemplate: (years: number) => string,
    city: string;
    country: string;

    contacts: Contact[];
}

export let headerRu: Header = {
    name: "Филипп Максимов",
    job: "Senior Android-разработчик",
    birthDate: new Date(1997, 8, 27),
    yearsOldTemplate: yearsOldTemplateRu,
    city: "Калининград",
    country: "Россия",
    contacts: [
        {
            serviceName: "E-mail",
            serviceLink: "mailto:phmaksimov+io@gmail.com",
            value: "phmaksimov@gmail.com",
        },
        {
            serviceName: "Telegram",
            serviceLink: "https://t.me/phhmaa",
            value: "phhmaa",
        },
        {
            serviceName: "Skype",
            serviceLink: "skype:filaktet?chat",
            value: "filaktet",
        }
    ],
}
export let headerEn: Header = {
    name: "Filipp Maksimov",
    job: "Senior Android Developer",
    birthDate: new Date(1997, 8, 27),
    yearsOldTemplate: yearsOldTemplateEn,
    city: "Kaliningrad",
    country: "Russia",
    contacts: [
        {
            serviceName: "E-mail",
            serviceLink: "mailto:phmaksimov+io@gmail.com",
            value: "phmaksimov@gmail.com",
        },
        {
            serviceName: "Telegram",
            serviceLink: "https://t.me/phhmaa",
            value: "phhmaa",
        },
        {
            serviceName: "Skype",
            serviceLink: "skype:filaktet?chat",
            value: "filaktet",
        }
    ],
}

function yearsOldTemplateRu(years: number) {
    const lastNumber = years.toString()[years.toString().length - 1];
    if (lastNumber === "1") {
        return `${years} год`;
    }
    if (lastNumber === "2" || lastNumber === "3" || lastNumber === "4") {
        return `${years} года`;
    }
    return `${years} лет`;
}

function yearsOldTemplateEn(years: number) {
    return `${years} years old`;
}
