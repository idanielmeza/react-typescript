import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string | null;
    nombre: string | null;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload ={
    username: string;
    nombre: string;
}

type AuthAction = 
    {type: 'LOGOUT'} |
    {type: 'LOGIN', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type){
        case 'LOGOUT':
            return{
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'LOGIN':
            const {nombre, username} = action.payload
            return{
                validando: false,
                token: '123',
                username,
                nombre
            }

        default:
            return state;
    }
}


export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() =>{
            dispatch({
                type: 'LOGOUT'
            })
        },1500)
    }, [])

    const login = ()=>{
        dispatch({
            type: 'LOGIN',
            payload:{
                username: 'ledezma',
                nombre: 'Daniel Ledezma'
            }
        })
    }

    const logout = () =>{
        dispatch({
            type: 'LOGOUT'
        })
    }

    if(validando){
        return (
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    Validando..
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                !token ? (<>
                        <div className='alert alert-danger'>
                            No autenticado
                        </div>
                        <button 
                            onClick={ login }
                        className='btn btn-primary'>Login</button>
                    </>
                ) : (   
                    <>
                        <div className='alert alert-success'>
                        Autenticado como {nombre}
                        </div>
                        <button
                            onClick={ logout }
                        className='btn btn-danger'>Logout</button>
                    </>
        
                    )
            }
        </>
    )
}
