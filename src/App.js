import 'antd/dist/antd.css';
import './App.css';
import Intro from './components/introduction/Intro'; 
import About from './components/about/About';
import Education from './components/education/Education';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Education />
      <ProductList />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
