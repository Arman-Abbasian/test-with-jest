import PostList from "./PostList";
import { render, screen } from '@testing-library/react';

test('post list', async () => {
    render(<PostList />);
    expect(screen.getByRole("heading")).toHaveTextContent(/post list/);
 });