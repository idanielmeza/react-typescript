import { useState, useRef, useEffect } from "react"
import { ReqResListado, User } from '../interfaces/reqRes';
import { reqRes } from "../api/reqRes";

interface useUsuariosInterface {
    usuarios: User[],
    paginaSiguiente: () => void,
    paginaAnterior: () => void,
}

export const useUsuarios = ():useUsuariosInterface => {

    const [usuarios, setUsuarios] = useState <User[]> ([]);

    const paginaRef = useRef(1);
  
    const cargarUsuarios = async()=>{
        try {
            const {data} = await reqRes.get<ReqResListado>('/users',{
                params:{
                    page: paginaRef.current
                }
            });
            console.log(data);

            if(data.data.length > 0){
                setUsuarios(data.data);
                
            }else{
                alert('No hay mas registros');
            }

            
        } catch (error) {
            console.log(error);
        }
        
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }else{
            alert('No hay mas registros');
        }
    }

    useEffect(() =>{
        //Llamar a una API
        cargarUsuarios();

    },[])

    return{
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }

}
