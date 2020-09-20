import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const Spinner: React.FC<Props> = (props) => {
    return (
        <span className={cx('ui-spinner', props.className)} />
    );
}

export default Spinner;