import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const Form: React.FC<Props> = (props) => {
    const {values, fields} = props;
    return (
        <div className={cx('b-form', props.className)}>
            Form <br/>
            <pre>values: {JSON.stringify(values, null, 2)}</pre>
            <pre>fields: {JSON.stringify(fields, null, 2)}</pre>
        </div>
    );
}

export default Form;