import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const Button: React.FC<Props> = (props) => {
    const {
        className,
        nativeType,
        ...restProps
    } = props;

    return (
        <button
            type={nativeType}
            className={cx('ui-button', className)}
            {...restProps}
        >
            {props.children}
        </button>
    );
}

export default Button;