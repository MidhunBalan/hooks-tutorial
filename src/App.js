import './App.css';
import UseStateHook from './components/UseStateHook';
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseImperativeHandleHook from './components/UseImperativeHandleHook';

function App() {
  return (
    <div className="App">
      <h1>Example 1: UseState Hook</h1>
      <UseStateHook/>
      <br/><hr/>
      <h1>Example 2: UseReducer Hook</h1>
      <UseReducerHook/>
      <br/><hr/>
      <h1>Example 3: UseEffect Hook</h1>
      <UseEffectHook/>
      <br/><hr/>
      <h1>Example 4: UseRef Hook</h1>
      <UseRefHook/>
      <br/><hr/>
      <h1>Example 5: UseLayoutEffectHook Hook</h1>
      <UseLayoutEffectHook/>
      <br/><hr/>
      <h1>Example 6: UseImperativeHandleHook Hook</h1>
      <UseImperativeHandleHook/>
    </div>
  );
}

export default App;
