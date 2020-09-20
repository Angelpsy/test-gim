import React from 'react';
import cx from 'classnames';
import { Props } from './types';

const IEmail: React.FC<Props> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" className={cx('i-email', props.className)}>
            <path fill="currentColor"
                  d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,1.2,0L20,7.25V17A1,1,0,0,1,19,18Z"
                  transform="translate(-2 -4)"/>
        </svg>
    );
}

export default IEmail;