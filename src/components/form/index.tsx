import React from 'react';
import cx from 'classnames';
import {Props} from './types';
import {FieldType} from "../../types/fields";
import UITextInput from '../../ui/text-input';
import UIRadioGroup from '../../ui/radio-group';
import UIRadio from '../../ui/radio';
import UICheckbox from '../../ui/checkbox';
import UISelect from '../../ui/select';
import UIButton from '../../ui/button';
import {getOptionByItemDictionary} from "../../utils/to-render";

const Form: React.FC<Props> = (props) => {
    const {
        values,
        fields,
        dictionaries,
        isCanBeSent,
        errorsByField,
        onSubmit
    } = props;

    const handlerSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit();
    }
    return (
        <form className={cx('b-form', props.className)} onSubmit={handlerSubmit}>
            Form <br/>
            {fields.map((field) => {
                if (field.type === FieldType.TEXT) {
                    return (
                        <UITextInput
                            key={field.id}
                            value={values[field.pathToValue]}
                            field={field}
                            onInput={(val) => props.changeValueField(field.pathToValue, val)}
                        />
                    );
                }
                if (field.type === FieldType.RADIO && field.options) {
                    return (
                        <UIRadioGroup
                            key={field.id}
                            options={field.options}
                            renderToOption={(option) => {
                                return (
                                    <UIRadio
                                        key={option.id}
                                        value={option.id}
                                        checked={values[field.pathToValue] === option.id }
                                        labelEnd={option.label}
                                        className={option.className}
                                        field={field}
                                        onChange={(val) => props.changeValueField(field.pathToValue, val)}
                                    />
                                );
                            }}
                        />
                    );
                }
                if (field.type === FieldType.CHECKBOX) {
                    return (
                        <UICheckbox
                            key={field.id}
                            checked={values[field.pathToValue]}
                            labelEnd={field.label}
                            isLabelAsHtml={field.isLabelAsHtml}
                            onChange={(val) => props.changeValueField(field.pathToValue, val)}
                        />
                    );
                }
                if (field.type === FieldType.SELECT) {
                    return (
                        <UISelect
                            key={field.id}
                            value={values[field.pathToValue]}
                            field={field}
                            options={field.dictionaryNameToOptions && dictionaries[field.dictionaryNameToOptions] ?
                                dictionaries[field.dictionaryNameToOptions].map(getOptionByItemDictionary) :
                                []}
                            onChange={(val) => props.changeValueField(field.pathToValue, val)}
                        />
                    );
                }
                return null;
            })}
            <div className={'b-form__footer'}>
                <UIButton disabled={!isCanBeSent} className={'b-form__action'}>
                    Sign up
                </UIButton>
            </div>
            <pre>errorsByField: {JSON.stringify(errorsByField, null, 2)}</pre>
            <pre>values: {JSON.stringify(values, null, 2)}</pre>
            <pre>fields: {JSON.stringify(fields, null, 2)}</pre>
            <pre>dictionaries: {JSON.stringify(dictionaries, null, 2)}</pre>
        </form>
    );
}

export default Form;