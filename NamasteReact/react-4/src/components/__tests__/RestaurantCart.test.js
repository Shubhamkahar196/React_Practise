import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"

it("should render Restaurant component with props Data",()=>{
//    mock data -> create a folder and export mock data in the file (filename.json and
//use here as a props

    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Leon's - Burgers and wings")
    expect(name).toBeInTheDocument()

})