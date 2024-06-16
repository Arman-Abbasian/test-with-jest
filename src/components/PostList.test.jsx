import PostList from "./PostList";
import { render, screen,act } from '@testing-library/react';


 test('post list', async () => {
    await act(async () => {
       render(<PostList />);
     });
    expect(screen.getByRole("heading")).toHaveTextContent(/post list/);
 });