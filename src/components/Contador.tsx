import {useState} from 'react';

export const Contador = () => {

    const [contador, setContador] = useState<number>(0);

    const acomular = (numero:number) => {
        setContador(contador + numero);
    }

    return (
        <>
            <h3>Contador <small>{contador}</small></h3>
            <button
                className='btn btn-primary'
                onClick={() => acomular(-1)}
            >
                -1
            </button>
            <button
                className='btn btn-primary mx-2'
                onClick={() => acomular(1)}
            >
                +1
            </button>
        </>
    )
}
