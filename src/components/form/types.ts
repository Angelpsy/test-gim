import { DefaultProps } from '../../types/components';
import {Field} from '../../types/fields';

export interface Props extends DefaultProps {
    values: object;
    fields: Field[];
}
