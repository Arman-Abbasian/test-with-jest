import './App.css';
import AddPost from './components/AddPost/AddPost';
import Final from './components/DynamicModal/Items';
import PostList from './components/Posts/PostList';

function App() {
  return (
    <div className="App" data-testid="App">
      <PostList />
      {/* <Final /> */}
    </div>
  );
}

export default App;
