import type {Technologies} from "../technologies";

export interface Company {
    companyName: string;
    location: string;
    startDate: Date;
    endDate: Date;
    projects: Project[],
}

export interface Project {
    name: string;
    link: string | null;
    description: string;
    technologies: (string | Technologies)[];
}
