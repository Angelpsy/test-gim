import React from 'react';
import cx from 'classnames';
import { Props } from './types';
import {Option} from "../../types/fields";

const defaultRenderOption = (option: Option) => {
    return (
        <option value={option.id} className={cx('ui-select-item', option.className)}>{option.label}</option>
    );
}

const RadioGroup: React.FC<Props> = (props) => {
    const options = props.options.map(it => ({...it, className: cx('ui-select__item', it.className)}));
    const handlerChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        props.onChange && props.onChange(event.currentTarget.value);
    }
    return (
        <select className={cx('ui-select', props.className)} onChange={handlerChange}>
            {options.map(props.renderToOption || defaultRenderOption)}
        </select>
    );
}

export default RadioGroup;