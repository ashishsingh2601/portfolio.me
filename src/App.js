import 'antd/dist/antd.css';
import './App.css';
import Intro from './components/introduction/Intro'; 
import About from './components/about/About';
import Education from './components/education/Education';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
     <Intro />
     <About />
     <Education />
     <ProductList />
     <Contact />
    </div>
  );
}

export default App;
