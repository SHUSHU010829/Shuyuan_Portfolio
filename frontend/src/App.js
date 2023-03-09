import './App.css';

import { About, Footer, Header, Works, Skills, Testimonial } from './container';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
