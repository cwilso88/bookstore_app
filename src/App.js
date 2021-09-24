import Books from './components/Books';
import Mylist from './components/Mylist';
import Modal from './components/Modal';
import './css/Books.css';
import './css/Mylist.css';
import './css/Modal.css';

function App() {
  return (
    <div className="App">
      <Books />
      <Mylist />
      <Modal />
    </div>
  );
}

export default App;
