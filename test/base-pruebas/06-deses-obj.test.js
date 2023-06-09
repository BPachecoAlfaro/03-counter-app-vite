import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Pruebas en 06-deses-obj', () => { 

    test("Funcion debe retornar un objeto desestructurado", () => {

        const clave = '123'
        const edad = 23

        const objetoRetornado = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            }
        }

        expect( objetoRetornado ).toEqual( usContext( {clave, edad} ) )


    })


 })