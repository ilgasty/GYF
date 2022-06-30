import {useState} from 'react';

export const useForm = (initialState = {} ) => {
    const [values, setValues] = useState(initialState)

    //resetea el valor de los campos del formulario al initialstate
    const reset= ( newValuesForm = initialState ) => {
        setValues(newValuesForm);
    }
    const handleInputChange = ({ target })=>{
        
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleInputChange,reset]  //retorno el objeto con los valores y las funciones
}
