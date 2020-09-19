import { DefaultProps } from '../../types/components';
import {ButtonHTMLAttributes} from "react";

export interface Props extends DefaultProps {
    nativeType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
    onClick?: () => void;
}
