import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const RadioInput: React.FC<Props> = (props) => {
    const {
        checked,
        className,
        onChange,
        labelStart,
        labelEnd,
        isLabelAsHtml,
        ...restProps
    } = props;

    const handlerChange = () => {
        onChange && onChange(!checked);
    }
    return (
        <label className={cx('ui-checkbox', className)} {...restProps}>
            {!!labelStart && !isLabelAsHtml &&
                <span className={cx('ui-checkbox__label', 'ui-checkbox__label--start')}>{labelStart}</span>}
            {!!labelStart && isLabelAsHtml &&
                <span className={cx('ui-checkbox__label', 'ui-checkbox__label--start')} dangerouslySetInnerHTML={{__html: labelStart}}/>}
            <input
                checked={checked}
                type={'checkbox'}
                onChange={handlerChange}
            />
            {!!labelEnd && !isLabelAsHtml &&
                <span className={cx('ui-checkbox__label', 'ui-checkbox__label--end')}>{labelEnd}</span>}
            {!!labelEnd && isLabelAsHtml &&
                <span className={cx('ui-checkbox__label', 'ui-checkbox__label--end')} dangerouslySetInnerHTML={{__html: labelEnd}}/>}
        </label>
    );
}

export default RadioInput;