import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const TextInput: React.FC<Props> = (props) => {
    const {
        value,
        field,
        className,
        onChange,
        onInput,
        ...restProps
    } = props;

    const handlerInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
        onInput && onInput(event.currentTarget.value);
    }

    const handlerChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        onChange && onChange(event.currentTarget.value);
    }
    return (
        <input
            className={cx('ui-text-input', className)}
            value={value || ''}
            type={field.nativeType || 'text'}
            placeholder={field.placeholder}
            onInput={handlerInput}
            onChange={handlerChange}
            {...restProps}
        />
    );
}

export default TextInput;