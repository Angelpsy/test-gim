import React from 'react';
import cx from 'classnames';
import {Props} from './types';
import {FieldType} from "../../types/fields";
import UITextField from '../../ui/text-field';

const Form: React.FC<Props> = (props) => {
    const {values, fields} = props;
    return (
        <div className={cx('b-form', props.className)}>
            Form <br/>
            {fields.map((field) => {
                if (field.type === FieldType.TEXT) {
                    return (<UITextField
                        value={values[field.pathToValue]}
                        field={field}
                        onInput={(val) => props.changeValueField(field.pathToValue, val)}
                    />);
                }
                return null;
            })}
            <pre>values: {JSON.stringify(values, null, 2)}</pre>
            <pre>fields: {JSON.stringify(fields, null, 2)}</pre>
        </div>
    );
}

export default Form;