import logo from './logo.svg';
import './App.css';
import Webpages from './webpages';
import List from './components/List';
import Func from './func_comp/FunctionalComponent';
import Cls from './class_comp/ClassComponent';
import Countryddl from './Countryddl';

function App() {
  return (
    <div className="App">
      <Countryddl/>
      <Func/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <List/> */}
        <List itemList = { ["Get milk", "Buy Amazon", "Take over the world"] }/>
        <List itemList = { ["Get bread", "Get eggs"] }/>
        <Webpages/>
      </header>
      <Cls/>
    </div>
  );
}

export default App;
