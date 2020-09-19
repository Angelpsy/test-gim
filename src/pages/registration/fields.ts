import {Field, FieldType} from '../../types/fields';

export const fields: Field[] = [
    {
        id: 'name',
        pathToValue: 'name',
        type: FieldType.TEXT,
        placeholder: 'Enter your name',
        defaultValue: null,
        require: true,
    },
    {
        id: 'email',
        pathToValue: 'email',
        type: FieldType.TEXT,
        placeholder: 'Email',
        defaultValue: null,
        require: true,
        iconStartName: 'email',
    },
    {
        id: 'password',
        pathToValue: 'password',
        type: FieldType.TEXT,
        nativeType: 'password',
        placeholder: 'Password',
        defaultValue: null,
        require: true,
        iconStartName: 'secured',
    },
    {
        id: 'country',
        pathToValue: 'country',
        type: FieldType.SELECT,
        placeholder: 'Select country',
        dictionaryNameToOptions: 'countries',
        defaultValue: null,
        require: true,
    },
    {
        id: 'gender',
        pathToValue: 'gender',
        type: FieldType.RADIO,
        nativeType: 'gender',
        defaultValue: null,
        require: true,
        options: [
            {
                id: 'm',
                label: 'Male',
            },
            {
                id: 'f',
                label: 'Female',
            },
        ],
    },
    {
        id: 'country',
        pathToValue: 'country',
        type: FieldType.CHECKBOX,
        defaultValue: false,
        require: true,
        label: 'Accept <a href="#">terms</a> and <a href="#">conditions</a>',
        isLabelAsHtml: true,
    },
];