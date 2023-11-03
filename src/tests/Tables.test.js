import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Tables from "../components/Tables";

describe("<Tables/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Tables/>
            </Router>
        )

        let tablesRole = screen.getByRole("tables")

        expect(tablesRole).toBeInTheDocument()
    })
    
})