import React, { useState, useMemo } from 'react';
import Form from '../../components/form';
import { fields } from './fields';
import { Values } from './types';
import {useGetDictionaryByName} from "./hooks";

const defaultValues = fields.reduce((val, field) => {
    const res: any = {...val};
    res[field.pathToValue] = field.defaultValue || null;
    return res;
}, {});

function PageRegistration() {
    const [values, setValues] = useState<Values>({...defaultValues});
    const countries = useGetDictionaryByName('countries');

    const changeValueField = (pathToValue: string, value: any) => {
        setValues({
            ...values,
            [pathToValue]: value,
        })
    };

    const dictionaries = useMemo(() => ({countries}), [countries]);

    return (
        <div className={'p-registration'}>
            <Form
                className={'p-registration__form'}
                values={values}
                fields={fields}
                dictionaries={dictionaries}
                changeValueField={changeValueField}
            />
        </div>
    );
}

export default PageRegistration;
