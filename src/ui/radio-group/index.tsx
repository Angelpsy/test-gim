import React from 'react';
import cx from 'classnames';
import { Props } from './types';

import './styles.css';

const RadioGroup: React.FC<Props> = (props) => {
    const options = props.options.map(it => ({...it, className: cx('ui-radio-group__item', it.className)}));
    return (
        <div className={cx('ui-radio-group', props.className)}>
            {options.map(props.renderToOption)}
        </div>
    );
}

export default RadioGroup;