import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './style.css';

const FormControl: React.FC<Props> = (props) => {
    return (
        <div className={cx('ui-form-control', props.className)}>
            <div className={'ui-form-control__control'}>{props.children}</div>
            <div className={'ui-form-control__error-message'}>{props.errorMessage || ''}</div>
        </div>
    );
}

export default FormControl;