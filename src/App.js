import Books from './components/Books';
import Mylist from './components/Mylist';
import Modal from './components/Modal';
import Header from './components/Header';
import Article from './components/Article';
import './css/Books.css';
import './css/Mylist.css';
import './css/Modal.css';
import './css/Header.css';
import './css/Article.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Books />
      <Mylist />
      <Modal />
    </div>
  );
}

export default App;
