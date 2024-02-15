"use client"

import { FC, FormEvent, useState } from "react";
import styles from './form.module.css';

const RadioButton: FC<{
    label: string;
    value: string;
    name: string;
}> = (props) => {

    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleRadioBtnChange = (value: string) => {
        if(selectedValue === '') setSelectedValue(value);
        else setSelectedValue('');
    }

    const handleRadiobtn = (event: FormEvent) => {
        setSelectedValue('');
        const target = event.target as HTMLInputElement;
        if(selectedValue === '') setSelectedValue(target.value);
        else setSelectedValue('');        
    }

    return (
        <>
            <div className={styles.radioCol}>
                <div className={styles.radioBtnWrapper}>
                    <input className={styles.radioBtnInput} onChange={handleRadiobtn} type="radio" data-checked={selectedValue && selectedValue === props.value ? true : false} checked={selectedValue && selectedValue === props.value ? true : false} name={props.name} value={props.value} />
                    <span className={styles.radioBtn}></span>
                </div>
                <label onClick={() => handleRadioBtnChange(props.value)} className={styles.radioBtnLabel}>{props.label}</label>
            </div>
        </>
    );
}

export default RadioButton;