import { render, screen,act } from "@testing-library/react";
import mockFetch from "../src/mocks/mockFetch";
import App from "./App";
import PostList from "./components/Posts/PostList";


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
 test('post list header', async () => {
   await act(async () => {
      render(<PostList />);
    });
   expect(screen.getByRole("heading")).toHaveTextContent(/post list/);
});

   test('post list items', async () => {
      await act(async () => {
         render(<PostList />);
       });

   const listItems = screen.getAllByRole("paragraph");
   expect(listItems).toHaveLength(2);
   });

   test('one item.title to be in the text', async () => {
      await act(async () => {
         render(<PostList />);
       });
       const paragraphElement = screen.getByText('aut');
       expect(paragraphElement).toBeInTheDocument();
   });
   test('one p tag with key=2 be in the document', async () => {
      await act(async () => {
         render(<PostList />);
       });
       const paragraphElement = screen.getByTestId('1');
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement.tagName.toLowerCase()).toBe('p');
   });

