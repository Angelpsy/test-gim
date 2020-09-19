import { DefaultProps } from '../../types/components';
import {Field} from '../../types/fields';

export interface Props extends DefaultProps {
    values: any;
    fields: Field[];
    changeValueField: (fieldName: string, value: any) => void;
}
