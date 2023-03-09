import './App.scss';

import { About, Footer, Header, Skills, Testimonial, Works } from './container';
import {Navbar} from './components'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Works />
    </div>
  );
}

export default App;
