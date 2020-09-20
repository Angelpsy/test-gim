import { DefaultProps } from '../../types/components';
import {Field, Option} from "../../types/fields";

export type onSelectOneOption  = (id: string) => void;

export interface Props extends DefaultProps {
    options: Option[];
    value: string | null;
    field: Field;
    fullWidth?: boolean;
    onChange: (val: string) => void;
    renderToOption?: (option: Option, onSelect: onSelectOneOption, isSelected?: boolean) => any;
}
