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


export interface ResponseApi {
    message: string;
    content: SkillData[] | null;
}

export interface Store {
    data: ResponseApi | null;
    loading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
}