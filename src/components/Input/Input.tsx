// import { ChangeEventHandler } from 'react';
import type { ChangeEventHandler } from 'react';
import styles from './Input.module.css';
import Label from '../Label/Label';
import InputError from '../InputError/InputError'

type InputProps = {
    label?: string;
    name: string;
    hiden?: boolean;
    placeholder: string;
    value: string;
    error: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({label, name, placeholder, value, error, hiden, onChange}: InputProps) => (
    
    <div className={[styles.container, error ? styles.error : ''].join(' ')}>

        {label && <Label>{label}</Label>}
        {
            hiden===true?
        <input type='hidden' placeholder={placeholder} name={name} value={value} onChange={onChange} />
        :
        <input placeholder={placeholder} name={name} value={value} onChange={onChange} />

        }
        <InputError value={error} />
    </div>
)

export default Input;