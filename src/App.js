// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'
function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch= useDispatch();
  return ( 
    <div className="App">
      <header className="App-header">
        <div>
          <h1>INCREMENT/DECREMENT</h1>
          <h4>React Redux</h4>
        </div>

        <div className="class-counter">
        <a title='decrement' href='/' onClick={ ()=> dispatch(decNumber())}><span>-</span></a>
          <input value={myState}/>
        <a href='/' title='increment' onClick={ ()=> dispatch(incNumber())} ><span>+</span></a>
        </div>
       
      </header>
    </div>
  );
}

export default App;
