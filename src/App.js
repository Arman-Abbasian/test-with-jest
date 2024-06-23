import './App.css';
import AddPost from './components/AddPost/AddPost';
import PostList from './components/Posts/PostList';

function App() {
  return (
    <div className="App" data-testid="App">
      <PostList />
    </div>
  );
}

export default App;
