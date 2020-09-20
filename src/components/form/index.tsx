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
import UIFormControl from '../../ui/form-control';
import {getOptionByItemDictionary} from "../../utils/to-render";

import './styles.css';

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
            <h2 className={'b-form__title'}>Create a new account</h2>
            <div className={'b-form__main'}>
                {fields.map((field) => {
                    if (field.type === FieldType.TEXT) {
                        return (
                            <UIFormControl key={field.id} errorMessage={errorsByField[field.pathToValue]} className={'b-form__row'}>
                                <UITextInput
                                    value={values[field.pathToValue]}
                                    field={field}
                                    onInput={(val) => props.changeValueField(field.pathToValue, val)}
                                />
                            </UIFormControl>
                        );
                    }
                    if (field.type === FieldType.RADIO && field.options) {
                        return (
                            <UIFormControl key={field.id} errorMessage={errorsByField[field.pathToValue]} className={'b-form__row'}>
                                <UIRadioGroup
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
                            </UIFormControl>
                        );
                    }
                    if (field.type === FieldType.CHECKBOX) {
                        return (
                            <UIFormControl key={field.id} errorMessage={errorsByField[field.pathToValue]} className={'b-form__row'}>
                                <UICheckbox
                                    checked={values[field.pathToValue]}
                                    labelEnd={field.label}
                                    isLabelAsHtml={field.isLabelAsHtml}
                                    onChange={(val) => props.changeValueField(field.pathToValue, val)}
                                />
                            </UIFormControl>
                        );
                    }
                    if (field.type === FieldType.SELECT) {
                        return (
                            <UIFormControl key={field.id} errorMessage={errorsByField[field.pathToValue]} className={'b-form__row'}>
                                <UISelect
                                    value={values[field.pathToValue]}
                                    field={field}
                                    options={field.dictionaryNameToOptions && dictionaries[field.dictionaryNameToOptions] ?
                                        dictionaries[field.dictionaryNameToOptions].map(getOptionByItemDictionary) :
                                        []}
                                    onChange={(val) => props.changeValueField(field.pathToValue, val)}
                                />
                            </UIFormControl>
                        );
                    }
                    return null;
                })}
            </div>
            <div className={'b-form__footer'}>
                <UIButton disabled={!isCanBeSent} className={'b-form__action'} fullWidth>
                    Sign up
                </UIButton>
            </div>
        </form>
    );
}

export default Form;