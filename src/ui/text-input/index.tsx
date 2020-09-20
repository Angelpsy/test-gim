import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const TextInput: React.FC<Props> = (props) => {
    const {
        value,
        field,
        className,
        fullWidth,
        disabled,
        renderIconLeft,
        onChange,
        onInput,
        ...restProps
    } = props;

    const handlerInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
        !disabled && onInput && onInput(event.currentTarget.value);
    }

    const handlerChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        !disabled && onChange && onChange(event.currentTarget.value);
    }
    return (
        <span className={cx('ui-text-input', className, {
            'ui-text-input--full-width': fullWidth,
            'ui-text-input--icon-left': renderIconLeft,
        })}>
            {renderIconLeft &&
                <span className={'ui-text-input__icon-wrapper ui-text-input__icon-wrapper--left'}>
                    {renderIconLeft({className: 'ui-text-input__icon'})}
                </span>
            }
            <input
                className={'ui-text-input__input'}
                value={value || ''}
                type={field.nativeType || 'text'}
                placeholder={field.placeholder}
                onInput={handlerInput}
                onChange={handlerChange}
                disabled={disabled}
                {...restProps}
            />
        </span>
    );
}

export default TextInput;