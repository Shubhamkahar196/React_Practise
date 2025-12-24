import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

// group and you can do seperately test cases
// you can write test or it do same things nothing change 
// this is unit testing 

describe("Contact  Us Page Test Case",()=>{
test("Should load contact us component",()=>{
    render(<Contact/>);
  
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

it("Should load button inside Contact Components",()=>{
    render(<Contact/>)

    // one way find button
    // const button = screen.getByRole("button");

    // second way to find button
    const button = screen.getByText("Send Message");

    // Assertion
    expect(button).toBeInTheDocument()
})

test("Should load input name inside contact components",()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("Your name");

    expect(inputName).toBeInTheDocument()
})

test("Should load 2 input boxed on the contact component",()=>{
    render(<Contact/>)

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    
    // console.log(inputBoxes.length)
    // Assertion
    expect(inputBoxes.length).toBe(3);
})
})

