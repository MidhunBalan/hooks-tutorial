import './App.css';
import UseStateHook from './components/UseStateHook';
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook';

function App() {
  return (
    <div className="App">
      <h1>Example 1: UseState Hook</h1>
      <UseStateHook/>
      <br/><hr/>
      <h1>Example 2: UseReducer Hook</h1>
      <UseReducerHook/>
      <br/><hr/>
      <UseEffectHook/>
    </div>
  );
}

export default App;
