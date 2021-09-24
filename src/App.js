import Books from './components/Books';
import Mylist from './components/Mylist';
import Modal from './components/Modal';
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  console.log(state);
  return state
};

export default connect(mapStateToProps, 
  {
    
  }
  )(App);
