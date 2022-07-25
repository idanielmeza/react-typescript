import { useForm } from "../hooks/useForm"


export const Formularios = () => {

    const {handleChange,email,password, state} = useForm({
        email: 'test@test.es',
        password: '123456'
    });

    return (
        <>
            <h1>Formularios</h1>
            <hr/>
            <input type='text'
                className='form-control'
                placeholder='email'
                name='email'
                value={email}
                onChange={({target})=>handleChange(target.value, 'email')}
            />
            <input type='text'
                className='form-control'
                placeholder='Password'
                name='password'
                value={password}
                onChange={({target})=>handleChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </code>
        </>
    )
}
