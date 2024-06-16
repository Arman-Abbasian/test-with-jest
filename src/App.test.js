import { render, screen,act } from "@testing-library/react";
import mockFetch from "../src/mocks/mockFetch";
import App from "./App";
import PostList from "./components/PostList";


beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
 })
 
 afterEach(() => {
    jest.restoreAllMocks()
 });


 test('post list', async () => {
   await act(async () => {
      render(<App />);
      
    });
    const appDiv = screen.getByTestId(/app/i);
    expect(appDiv).toBeInTheDocument();
});

//-----------------
 test('post list', async () => {
   await act(async () => {
      render(<PostList />);
    });
   expect(screen.getByRole("heading")).toHaveTextContent(/post list/);
});

