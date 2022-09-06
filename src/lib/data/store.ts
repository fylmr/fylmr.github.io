import type {Company} from "./companies/companies";
import {type Header, headerEn, headerRu} from "./header";
import {writable, type Writable} from "svelte/store";
import {type Education, educationEn, educationRu} from "./education";
import {type Skill, skillsEn, skillsRu} from "./skill";
import {type Language, languagesEn, languagesRu} from "./language";
import type {Technologies} from "./technologies";
import {technologiesList} from "./technologies";
import {companiesEn} from "./companies/companiesEn";
import {companiesRu} from "./companies/companiesRu";

export interface CvData {
    header: Header;

    whatIWorkWithHeader: string;
    whatIWorkWith: Technologies[],

    experienceHeader: string;
    companies: Company[];

    educationHeader: string;
    education: Education[];

    additionalSkillsHeader: string;
    additionalSkills: Skill[];

    languagesHeader: string;
    languages: Language[];
}

export let cvDataRu: CvData = {
    header: headerRu,

    whatIWorkWithHeader: "Основные теги",
    whatIWorkWith: technologiesList,

    experienceHeader: "Опыт работы",
    companies: companiesRu,

    educationHeader: "Образование",
    education: educationRu,

    additionalSkillsHeader: "Дополнительно",
    additionalSkills: skillsRu,

    languagesHeader: "Языки",
    languages: languagesRu,
}

export let cvDataEn: CvData = {
    header: headerEn,

    whatIWorkWithHeader: "Tags",
    whatIWorkWith: technologiesList,

    experienceHeader: "Experience",
    companies: companiesEn,

    educationHeader: "Education",
    education: educationEn,

    additionalSkillsHeader: "Additional Skills",
    additionalSkills: skillsEn,

    languagesHeader: "Languages",
    languages: languagesEn,
}

export const cvData: Writable<CvData> = writable(cvDataEn);

