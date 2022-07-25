import { useState } from 'react';


export const useForm = <T extends Object>(form: T) => {
    
    const [state,setState] = useState(form);

    const handleChange = ( value:string , campo: keyof T ):void =>{
        setState({
            ...state,
            [campo]: value
        })
    }

    return{
        ...state,
        state,
        handleChange
    }
}
