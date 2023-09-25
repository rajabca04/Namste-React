import Header from "../header";

test("test header", () => {
    render(<Header/>);

    const heading = screen.getByRole("heading", { name: "Foodeworld.eat" });

    expect(heading).toBeInTheDocument();
})