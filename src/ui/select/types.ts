import { DefaultProps } from '../../types/components';
import {Field, Option} from "../../types/fields";

export interface Props extends DefaultProps {
    options: Option[];
    value: string | null;
    field: Field;
    onChange: (val: string) => void;
    renderToOption?: (option: Option) => any;
}
