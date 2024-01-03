export interface AskCardProps {
    typeText?: string;
    descText?: string;
    tagsArray?: string[];
    number?: number;
    optText?: string;
}

export interface BtnProps {
    label?: string;
    display?: 'block' | 'inline-block';
    href?: string;
    fn?: () => void;
    target?: string;
}