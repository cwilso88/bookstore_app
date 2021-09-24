import Books from './components/Books';
import Mylist from './components/Mylist';
import Modal from './components/Modal';
import Header from './components/Header';
import './css/Books.css';
import './css/Mylist.css';
import './css/Modal.css';
import './css/Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <Mylist />
      <Modal />
    </div>
  );
}

export default App;
