import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const IRadio: React.FC<Props> = (props) => {
    return (
        <span className={cx('i-radio', props.className, {
            'i-radio--checked': props.checked
        })} />
    );
}

export default IRadio;