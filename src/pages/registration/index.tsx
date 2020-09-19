import React, { useState } from 'react';
import Form from '../../components/form';
import { fields } from './fields';
import { Field } from '../../types/fields';
import { Values } from './types';

const defaultValues = fields.reduce((val, field) => {
    const res: any = {...val};
    res[field.pathToValue] = field.defaultValue || null;
    return res;
}, {});

function PageRegistration() {
    const [values, setValues] = useState<Values>({...defaultValues});

    const changeValueField = (pathToValue: keyof Field['pathToValue'], value: any) => {
        setValues({
            ...values,
            [pathToValue]: value,
        })
    };

    return (
        <div className={'p-registration'}>
            <Form
                className={'p-registration__form'}
                values={values}
                fields={fields}
                changeValueField={changeValueField}
            />
        </div>
    );
}

export default PageRegistration;
