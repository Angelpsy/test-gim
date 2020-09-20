import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const FormControl: React.FC<Props> = (props) => {
    return (
        <div className={cx('ui-form-control', props.className)}>
            <div className={'ui-form-control__control'}>{props.children}</div>
            {props.errorMessage && <div className={'ui-form-control__error-message'}>{props.errorMessage}</div>}
        </div>
    );
}

export default FormControl;