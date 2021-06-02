import '../App.css';
import Sidebar from './Sidebar';

function App() {
    return (
      <div className="App">
        <Sidebar/>
        <div className="MainBody" style={{
  width: {window.innerWidth > '470px' ? 80% : 50% };}}>
            
        </div>
      </div>
    );
  }
  
  export default App;
