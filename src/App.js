import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/pages/Homepage';
import CreateEntry from './components/pages/CreateEntry';

function App() {
  let Page;
  switch (window.location.pathname){
    case "/":
      Page = Homepage;
      break;
    case "/createEntry":
      Page = CreateEntry;
      break;
    case "/showTables":
      Page = Homepage;
      break;
  }
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Page/>
      </div>
    </div>
  );
}

export default App;
