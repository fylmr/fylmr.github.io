import {companies, type Company} from "./companies";
import {type Header, headerRu} from "./header";
import {writable, type Writable} from "svelte/store";
import {type Education, educationRu} from "./education";
import {type Skill, skillsRu} from "./skill";
import {type Language, languagesRu} from "./language";
import type {Technologies} from "./technologies";
import {technologiesList} from "./technologies";

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
    companies: companies,

    educationHeader: "Образование",
    education: educationRu,

    additionalSkillsHeader: "Дополнительно",
    additionalSkills: skillsRu,

    languagesHeader: "Языки",
    languages: languagesRu,
}

export const cvData: Writable<CvData> = writable(cvDataRu);

