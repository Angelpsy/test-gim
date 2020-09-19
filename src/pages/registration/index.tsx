import React, {useMemo, useState} from 'react';
import Form from '../../components/form';
import {fields} from './fields';
import {Values} from './types';
import {useGetDictionaryByName} from "./hooks";
import * as yup from 'yup';

const defaultValues = fields.reduce((val, field) => {
    const res: any = {...val};
    res[field.pathToValue] = field.defaultValue ?? null;
    return res;
}, {});

const shapeValidator = fields.reduce((val, field) => {
    const res: any = {...val};
    res[field.pathToValue] = field.validatorScheme;
    return res;
}, {});

function PageRegistration() {
    const [values, setValues] = useState<Values>({...defaultValues});
    const [errorsByField, setErrorsByField] = useState({});
    const countries = useGetDictionaryByName('countries');

    const changeValueField = (pathToValue: string, value: any) => {
        setValues({
            ...values,
            [pathToValue]: value,
        });
    };

    const dictionaries = useMemo(() => ({countries}), [countries]);

    const isCanBeSent = useMemo(() => {
        return fields.every((field) => field.checkIsFill(values[field.pathToValue]));
    }, [values]);

    const getErrorToValues = () => {
        return yup.object().shape(shapeValidator)
            .validate(values, { abortEarly: false })
            .then(() => {
                return false;
            })
            .catch((response) => {
                return response.inner.reduce((acc: any, error: any) => {
                    const res = {...acc};
                    res[error.path] = error.message
                    return res;
                }, {});
            });
    };

    const handlerSend = async () => {
        const errors = await getErrorToValues();
        if (!errors) {
            setErrorsByField({});
            // TODO: send to server
        } else {
            setErrorsByField(errors);
        }
    }

    return (
        <div className={'p-registration'}>
            <Form
                className={'p-registration__form'}
                values={values}
                fields={fields}
                dictionaries={dictionaries}
                isCanBeSent={isCanBeSent}
                errorsByField={errorsByField}
                changeValueField={changeValueField}
                onSubmit={handlerSend}
            />
        </div>
    );
}

export default PageRegistration;
