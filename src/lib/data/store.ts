import {companiesRu} from "./companiesRu";
import {type Header, headerRu} from "./header";
import {writable, type Writable} from "svelte/store";

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
    companies: Company[];
}

export let cvDataRu: CvData = {
    header: headerRu,
    companies: companiesRu,
}

export const cvData: Writable<CvData> = writable(cvDataRu);

