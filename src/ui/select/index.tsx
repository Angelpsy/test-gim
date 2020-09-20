import React, {useMemo, useState} from 'react';
import cx from 'classnames';
import { Props, onSelectOneOption } from './types';
import {Option} from "../../types/fields";
import IArrowDown from "../../icons/arrow-down";

import './styles.css';

const defaultRenderOption = (option: Option, onSelect: onSelectOneOption, isSelected: boolean) => {
    return (
        <button
            key={option.id}
            value={option.id}
            disabled={option.disabled}
            className={cx('ui-select-item', option.className, {
                'ui-select-item--selected': isSelected
            })}
            onClick={() => {
                onSelect(option.id);
            }}
            type={'button'}
        >
            {option.label}
        </button>
    );
}

const RadioGroup: React.FC<Props> = (props) => {
    const {
        options,
        field,
        renderToOption = defaultRenderOption,
        value,
        onChange,
        className,
        fullWidth,
        disabled,
        ...restProps
    } = props;
    const [isOpen, setOpen] = useState<boolean>(false);

    const optionsToRender = options.map(it => ({...it, className: cx('ui-select__item', it.className)}));
    const handlerSelectOneOption = (id: string) => {
        if (disabled) return;
        setOpen(false);
        onChange && onChange(id);
    }

    const labelSelectedOption = useMemo(() => {
        const selectedOption = optionsToRender.find((it) => it.id === value);
        return selectedOption?.label;
    }, [optionsToRender, value])

    const renderLabelToggleAction = () => {
        if (labelSelectedOption) return labelSelectedOption;
        return (<span className={'ui-select__action-placeholder'}>{field.placeholder || 'Click to select'}</span>);
    }

    return (
        <span className={cx('ui-select', className, {
            'ui-select--full-width': fullWidth,
        })} {...restProps}
        >
            <button
                className={cx('ui-select__action-toggle', {
                    'ui-select__action-toggle--active': isOpen,
                })}
                type={'button'}
                disabled={disabled}
                onClick={() => {setOpen(!isOpen)}}
            >
                {renderLabelToggleAction()}
                <IArrowDown className={cx('ui-select__action-icon', {
                    'ui-select__action-icon--active': isOpen,
                })}/>
            </button>
            <span className={cx('ui-select__dropdown', {
                'ui-select__dropdown--active': isOpen && !disabled
            })}>
                <span className={'ui-select__dropdown-content'}>
                    {optionsToRender.map((option) => {
                        return renderToOption(option, handlerSelectOneOption, option.id === value);
                    } )}
                </span>
            </span>
        </span>
    );
}

export default RadioGroup;