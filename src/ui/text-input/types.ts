import { DefaultProps } from '../../types/components';
import {Field} from "../../types/fields";

export interface Props extends DefaultProps {
    value: any;
    field: Field;
    fullWidth?: boolean;
    renderIconLeft?: (props: any) => any;
    onChange?: (value: string | number | undefined) => void;
    onInput?: (value: string | number | undefined) => void;
}
