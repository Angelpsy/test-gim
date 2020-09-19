export enum FieldType {
    TEXT = 'text',
    SELECT = 'select',
}

export interface Field {
    id: string;
    pathToValue: string;
    defaultValue?: any;
    type: FieldType;
    nativeType?: string;
    label?: string;
    placeholder?: string;
    dictionaryNameToOptions?: string;
}