export interface LogoData {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export interface BadgeData {
    name: string;
    description: string;
}

export interface SkillData {
    id: number;
    name: string;
    logo : string;
    description: string;
}

export interface ProjectData {
    key: number;
    id: number;
    name: string;
    logo : string;
    description: string;
    image_preview: string;
    image_preview_secondary: string;
    link: string;
    github: string;
    tech_stack: string;
    status: string;
}

export interface ExperienceData {
    id: string;
    company: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    logo: string;
}

export interface ContactData {
    id?: string;
    name: string;
    email: string;
    message: string;
    subject: string;
}


export interface ResponseApi {
    message: string;
    content: SkillData[] | ProjectData[] | ExperienceData[] | null;
}

export interface Store {
    data: ResponseApi | null;
    loading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
}

