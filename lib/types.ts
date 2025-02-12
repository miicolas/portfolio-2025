import { z, ZodIssue } from "zod";

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
    description: string;
    image_preview: string;
    image_preview_secondary: string;
    link: string;
    github: string;
    tech_stack: string;

}

export interface ExperienceData {
    id: number;
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
    messageCleaned: string;
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

export interface SkillsFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FormResponse = {
    status: "success" | "error";
    errors?: ZodIssue[];
    message?: string;
    content?: any;
};