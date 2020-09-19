import { DefaultProps } from '../../types/components';
import {Field} from '../../types/fields';
import {DictionaryItem} from "../../types/dictionaries";

export interface Props extends DefaultProps {
    values: any;
    fields: Field[];
    isCanBeSent: boolean;
    changeValueField: (fieldName: string, value: any) => void;
    dictionaries: {
        [dictionaryName: string]: DictionaryItem[];
    }
}
