import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Prubeas en <FirstApp />', () => {

	test("Debe de hacer match con el snapshot", () => {

		const tittle = 'Hola, Soy goku';

		render( <FirstApp tittle={ tittle } /> )

	});


})