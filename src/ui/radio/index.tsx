import React from 'react';
import cx from 'classnames';
import { Props } from './types';
import IRadio from "../../icons/radio";

import './styles.css';

const Radio: React.FC<Props> = (props) => {
    const {
        value,
        checked,
        field,
        className,
        onChange,
        labelStart,
        labelEnd,
        ...restProps
    } = props;

    const handlerChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        onChange && onChange(event.currentTarget.value);
    }
    return (
        <label className={cx('ui-radio', className)} {...restProps}>
            {!!labelStart && <span className={cx('ui-radio__label', 'ui-radio__label--start')}>{labelStart}</span>}
            <input
                value={value}
                checked={checked}
                type={'radio'}
                name={field.id}
                className={'ui-radio__input'}
                onChange={handlerChange}
            />
            <IRadio className={'ui-radio__check'} checked={checked}/>
            {!!labelEnd && <span className={cx('ui-radio__label', 'ui-radio__label--end')}>{labelEnd}</span>}
        </label>
    );
}

export default Radio;