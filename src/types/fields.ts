import {DefaultProps} from "./components";

export enum FieldType {
    TEXT = 'text',
    SELECT = 'select',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
}

export interface Option extends DefaultProps {
    id: string;
    label: string;
}

export interface Field {
    id: string;
    pathToValue: string;
    defaultValue?: any;
    type: FieldType;
    nativeType?: string;
    require?: boolean;
    label?: string;
    isLabelAsHtml?: boolean;
    placeholder?: string;
    iconStartName?: string;
    dictionaryNameToOptions?: string;
    options?: Option[];
    checkIsFill: (val: any) => boolean;
}