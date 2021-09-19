import Books from './components/Books';
import Mylist from './components/Mylist';
import './css/Books.css';
import './css/Mylist.css';
import './css/Modal.css';

function App() {
  return (
    <div className="App">
      <Books />
      
      <Mylist />
    </div>
  );
}

export default App;
