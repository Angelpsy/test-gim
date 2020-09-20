import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const ICheckbox: React.FC<Props> = (props) => {
    return (
        <span className={cx('i-checkbox', props.className, {
            'i-checkbox--checked': props.checked
        })} />
    );
}

export default ICheckbox;