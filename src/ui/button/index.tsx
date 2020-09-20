import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const Button: React.FC<Props> = (props) => {
    const {
        className,
        nativeType,
        fullWidth,
        ...restProps
    } = props;

    return (
        <button
            type={nativeType}
            className={cx('ui-button', className, {'ui-button--full-width': fullWidth})}
            {...restProps}
        >
            {props.children}
        </button>
    );
}

export default Button;