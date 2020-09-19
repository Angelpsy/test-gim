import { DefaultProps } from '../../types/components';

export interface Props extends DefaultProps {
    checked: boolean;
    labelStart?: string;
    labelEnd?: string;
    isLabelAsHtml?: boolean;
    onChange?: (value: boolean) => void;
}
