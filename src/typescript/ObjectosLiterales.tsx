interface Persona{
    nombreCompleto: string,
    edad: number,
    direccion:Direccion
}

interface Direccion{
    pais: string,
    casaNo: number
}

export const ObjectosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'DANIEL',
        edad: 22,
        direccion:{
            pais: 'Mexico',
            casaNo: 200
        }
    }

  return (
    <>
        <h3>Objectos literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>    

    </>
  )
}
