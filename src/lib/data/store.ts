import {companiesRu} from "./companiesRu";
import {type Header, headerRu} from "./header";
import {writable, type Writable} from "svelte/store";
import {type Education, educationRu} from "./education";

export interface Company {
    companyName: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    projects: Project[],
}

export interface Project {
    name: string;
    link: string | null;
    description: string;
    technologies: string[];
}

export interface CvData {
    header: Header;

    experienceHeader: string;
    companies: Company[];

    educationHeader: string;
    education: Education[];
}

export let cvDataRu: CvData = {
    header: headerRu,

    experienceHeader: "Опыт работы",
    companies: companiesRu,

    educationHeader: "Образование",
    education: educationRu,
}

export const cvData: Writable<CvData> = writable(cvDataRu);

