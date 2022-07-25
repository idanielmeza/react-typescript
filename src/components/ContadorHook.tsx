import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

    const {contador, acomular} = useCounter();
    
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
