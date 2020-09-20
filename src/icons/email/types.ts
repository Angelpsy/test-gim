import { DefaultProps } from '../../types/components';
import { Option } from "../../types/fields";

export interface Props extends DefaultProps {
    options: Option[];
    renderToOption: (option: Option) => any;
}
