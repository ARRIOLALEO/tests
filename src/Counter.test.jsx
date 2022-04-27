import { render,screen,fireEvent } from "@testing-library/react"
import Counter from './Counter'
test("this test checks if counter exist",()=>{
    render(<Counter/>)
    const element = screen.getByText(/Counter/i)
    expect(element).toBeInTheDocument()
})

test("this test check if the componet is rendering well",()=>{
    render(<Counter/>)
    const element = screen.queryByText(/search/i)
    expect(element).not.toBeInTheDocument()
})
test("this test will check if the buttons exist",()=>{
    render(<Counter/>)
    const element = screen.getAllByRole("button")
    expect(element[0]).toBeInTheDocument()
})

test("check if the input exist",()=>{
    render(<Counter/>)
    const element = screen.getByRole("textbox")
    expect(element).toBeInTheDocument()
})

test("this test check if the add on button works",()=>{
    render(<Counter/>)
    const theIncreseButton = screen.getAllByRole("button")
    const myCounter = screen.getByTestId("my-counter")
    fireEvent.click(theIncreseButton[0])
    fireEvent.click(theIncreseButton[0])
    fireEvent.click(theIncreseButton[0])
    fireEvent.click(theIncreseButton[0])
    fireEvent.click(theIncreseButton[0])
    fireEvent.click(theIncreseButton[0])
    expect(myCounter.innerHTML).toBe("6")
})


test("this test checks if the input is empty at the beginnig",()=>{
        render(<Counter/>)
        const emptyBeginning = screen.getByRole("textbox")
        expect(emptyBeginning.innerHTML).toBe("")
})

test("check if the input is changing correctly",()=>{
    render(<Counter/>)
    const element = screen.getAllByRole("textbox")
    fireEvent.change(element[0],{
        target:{
           value:"Hello" 
        }
    })
    expect(element[0].value).toBe("Hello")
})

test("this tests checks if the buttons work well together",()=>{
    render(<Counter/>)
    const buttons = screen.getAllByRole("button")
    const counter = screen.getByTestId("my-counter")
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[0])
    expect(counter.innerHTML).toBe("2")
    fireEvent.click(buttons[1])
    expect(counter.innerHTML).toBe("1")
})















