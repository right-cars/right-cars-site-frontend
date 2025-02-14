export type FormFields = {
    id: string;
    label: string;
    type: string;
    options?: string[],
    placeholder?: string,
    required?: boolean,
    phone?:boolean
}