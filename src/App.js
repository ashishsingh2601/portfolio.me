import 'antd/dist/antd.css';
import './App.css';
import Intro from './components/introduction/Intro'; 
import About from './components/about/About';
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
     <Intro />
     <About />
     <Education />
    </div>
  );
}

export default App;
