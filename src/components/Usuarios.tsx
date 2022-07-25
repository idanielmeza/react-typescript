
import { useUsuarios } from "../hooks/useUsuarios";
import { User } from '../interfaces/reqRes';


export const Usuarios = () => {

    const {paginaAnterior, paginaSiguiente, usuarios} = useUsuarios();

    

    const renderItem = ({first_name,last_name,email,avatar}: User) => {
        return(
            <tr key={crypto.randomUUID()}>
                <td>
                    <img src={avatar} alt={first_name} style={{width: 50, borderRadius: 100}}/>
                </td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h1>Usuarios</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(renderItem)}

            </tbody>


        </table>

        <button className='btn btn-primary' onClick={paginaAnterior}>
            Anteriores
        </button>
        <button className='btn btn-primary' onClick={paginaSiguiente}>
            Siguientes
        </button>
    </>
  )
}
