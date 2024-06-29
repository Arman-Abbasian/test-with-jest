import { render, screen,act, fireEvent, waitFor } from "@testing-library/react";
import mockFetch from "../src/mocks/mockFetch";
import App from "./App";
import PostList from "./components/Posts/PostList";
import AddPost from "./components/AddPost/AddPost";

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
 });
 
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

   test('should submit the post form and update the post list', async () => {
      render(<AddPost />);
    
      const titleInput = screen.getByLabelText(/title/i);
      const bodyInput = screen.getByLabelText(/body/i);
      const submitButton = screen.getByRole('button', { name: /add/i });
    
      fireEvent.change(titleInput, { target: { value: 'New Post Title' } });
      fireEvent.change(bodyInput, { target: { value: 'New Post Body' } });
    
      fireEvent.click(submitButton);
    
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalledWith('http://localhost:4000/posts', expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ title: 'New Post Title', body: 'New Post Body' }),
        }));
        expect(mockSetPosts).toHaveBeenCalledWith(expect.any(Function));
      });
    
      // Verify form is reset
      expect(titleInput.value).toBe(initilaPostForm.title);
      expect(bodyInput.value).toBe(initilaPostForm.body);
    });

