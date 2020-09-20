import { DefaultProps } from '../../types/components';
import {Field} from '../../types/fields';
import {DictionaryItem} from "../../types/dictionaries";

export interface Props extends DefaultProps {
    values: any;
    fields: Field[];
    isCanBeSent: boolean;
    isLoading: boolean;
    errorsByField: {
        [fieldName: string]: string;
    };
    dictionaries: {
        [dictionaryName: string]: DictionaryItem[];
    }
    changeValueField: (fieldName: string, value: any) => void;
    onSubmit: () => void;
}
