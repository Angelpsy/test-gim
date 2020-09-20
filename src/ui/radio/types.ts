import { DefaultProps } from '../../types/components';
import {Field} from "../../types/fields";

export interface Props extends DefaultProps {
    value: string;
    checked: boolean;
    labelStart?: string;
    labelEnd?: string;
    field: Field;
    disabled?: boolean;
    onChange?: (value: string | number | undefined) => void;
}
