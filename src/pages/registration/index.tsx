import React, { useState } from 'react';
import Form from '../../components/form';
import { fields } from "./fields";

const defaultValues = fields.reduce((val, field) => {
    const res: any = {...val};
    res[field.pathToValue] = field.defaultValue || null;
    return res;
}, {});

function PageRegistration() {
    const [values, setValues] = useState({...defaultValues});
    return (
        <div className={'p-registration'}>
            <Form
                className={'p-registration__form'}
                values={values}
                fields={fields}
            />
        </div>
    );
}

export default PageRegistration;
