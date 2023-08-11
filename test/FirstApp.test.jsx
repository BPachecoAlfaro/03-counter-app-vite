import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Prubeas en <FirstApp />', () => {

	// test("Debe de hacer match con el snapshot", () => {

	// 	const tittle = 'Hola, Soy goku';

	// 	const { container } = render( <FirstApp tittle={ tittle } /> )
		
	// 	expect( container ).toMatchSnapshot();

	// });
	
	test( "debe de mostrar el titulo en un h1", () => {

		const title = "hola, soy goku";
		const { container, getByText , getByTestId } = render(<FirstApp title={ title } />)
		expect( getByText(title) ).toBeTruthy();

		// const h1 = container.querySelector( "h1" );
		// expect( h1.innerHTML ).toContain( tittle );
		expect( getByTestId("test-title").innerHTML ).toContain(title);


	});

	test( "Debe de mostrar el subtitulo enviado por props", () => {

		const title = "hola, soy goku";
		const subTitle = "soy un subtitulo";
		const { getAllByText } = render(
			<FirstApp
				title={ title }
				subTitle={ subTitle }
			/>

		)

		expect( getAllByText(subTitle).length ).toBe(2);


	})



})