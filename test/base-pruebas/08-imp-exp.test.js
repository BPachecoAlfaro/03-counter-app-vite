import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => { 

    test("getHeroeById debe retornar un heroe por el id", () => {

        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' } )

    })

    test("getHeroeById debe retornar undefined si el heroe no existe", () => {

        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();

    })

    // Tarea:
    //

    test("getHeroByOwner debe retornar un arreglo con los heroes", () => {

        const owner = "Marvel";

        expect( getHeroesByOwner( owner ) ).toEqual( getHeroesByOwner( 'Marvel' ) );
        expect( getHeroesByOwner( owner ) ).toHaveLength( 2 );


    })

    test("getHeroByOwner debe retornar un arreglo con los heroes", () => {

        const owner = "DC";

        expect( getHeroesByOwner( owner ) ).toHaveLength( 3 );

    })
    // Forma del profe

    test("getHeroByOwner debe retornar un arreglo con los heroes", () => {

        const owner = "DC";
        const heroes = getHeroesByOwner( owner );
        console.log( heroes );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

    })

    test("getHeroByOwner debe retornar un arreglo con los heroes", () => {

        const owner = "Marvel";
        const heroes = getHeroesByOwner( owner );
        console.log( heroes );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
    })

 })