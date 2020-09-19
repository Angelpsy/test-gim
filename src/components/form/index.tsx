import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const Form: React.FC<Props> = (props) => {
    return (
        <div className={cx('b-form', props.className)}>
            Form
        </div>
    );
}

export default Form;