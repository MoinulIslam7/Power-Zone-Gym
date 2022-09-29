import './App.css';
import Header from './Components/Header/Header';
import Workout from './Components/Workout/Workout'
import Blog from './Components/Blog/Blog'
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Workout></Workout>
      <Blog></Blog>
    </div>
  );
}

export default App;
