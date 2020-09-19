import React from 'react';
import cx from 'classnames';
import { Props } from './types';
import {Option} from "../../types/fields";

const defaultRenderOption = (option: Option) => {
    return (
        <option
            key={option.id}
            value={option.id}
            disabled={option.disabled}
            className={cx('ui-select-item', option.className)}
        >
            {option.label}
        </option>
    );
}

const RadioGroup: React.FC<Props> = (props) => {
    const {
        options,
        field,
        renderToOption,
        value,
        onChange,
        className,
        ...restProps
    } = props;
    const optionsToRender = options.map(it => ({...it, className: cx('ui-select__item', it.className)}));
    const handlerChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        onChange && onChange(event.currentTarget.value);
    }
    if (!value) {
        optionsToRender.unshift({
            id: '',
            label: '',
            disabled: true,
            className: 'ui-select__item'
        })
    }
    return (
        <select
            className={cx('ui-select', className)}
            onChange={handlerChange}
            value={value || ''}
            placeholder={field.placeholder}
            {...restProps}
        >
            {optionsToRender.map(renderToOption || defaultRenderOption)}
        </select>
    );
}

export default RadioGroup;