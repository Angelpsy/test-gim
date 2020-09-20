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
import UISpinner from '../../ui/spinner';
import {getOptionByItemDictionary} from "../../utils/to-render";

import IEmail from '../../icons/email';
import ISecure from '../../icons/secure';

import './styles.css';

const Form: React.FC<Props> = (props) => {
    const {
        values,
        fields,
        dictionaries,
        isCanBeSent,
        isLoading,
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
                                    fullWidth
                                    disabled={isLoading}
                                    renderIconLeft={field.iconStartName ? (props) => {
                                        if (field.iconStartName === 'email') return <IEmail {...props}/>
                                        if (field.iconStartName === 'secure') return <ISecure {...props}/>
                                        return null;
                                    } : undefined}
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
                                                disabled={isLoading}
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
                                    disabled={isLoading}
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
                                    fullWidth
                                    disabled={isLoading}
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
                <UIButton disabled={!isCanBeSent || isLoading} className={'b-form__action'} fullWidth>
                    {isLoading ? <UISpinner /> : 'Sign up'}
                </UIButton>
            </div>
        </form>
    );
}

export default Form;