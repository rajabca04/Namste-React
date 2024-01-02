import Header from "../Header";
test("test header", () => {
    render(<Header/>);
    const heading = screen.getByRole("heading", { name: "Foodeworld.eat" });
    expect(heading).toBeInTheDocument();
})