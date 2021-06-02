import '../App.css';
import Sidebar from './Sidebar';

function App() {
    
    
    const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
}

    window.addEventListener('resize', handleResize)
  })
    
    
    return (
      <div className="App">
        <Sidebar/>
        <div className="MainBody" style={{
  width: {dimensions.width > '470px' ? 80% : 50% };}}>
            
        </div>
      </div>
    );
  }
  
  export default App;
