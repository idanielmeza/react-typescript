
export const TiposBasicos = () => {

    const nombre: string  = 'DANIEL';
    const edad: Number = 22;
    const activo: boolean = true;

    const poderes: string[] = ['velocidad', 'super fuerza', 'super agilidad'];

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre} - {edad} - { activo ? 'activo' : 'inactivo' }
            <br/>
            { poderes.join(', ') }
        </>
    )
}
