import React from 'react';
import s from './FormControls.module.css';


export const Textarea = ({ input, meta, ...props }) => { //eto rest operator, zapis oznachaet chto< iz props dostaetsa input i meta, vse ostalnoe, chto bilo v propsah ostaetsa v nih 
    const metaError = meta.touched && meta.error;
    return (
        <div className={metaError ? s.formControl + ' ' + s.error : ' '}>
            <textarea {...input}{...props} />
            {metaError && < span > {meta.error}</span>}
        </div >
    )
}

export const Input = ({ input, meta, ...props }) => { //eto rest operator, zapis oznachaet chto< iz props dostaetsa input i meta, vse ostalnoe, chto bilo v propsah ostaetsa v nih 
    const metaError = meta.touched && meta.error;
    return (
        <div className={metaError ? s.formControl + ' ' + s.error : ' '}>
            <input {...input}{...props} />
            {metaError && < span > {meta.error}</span>}
        </div >
    )
}