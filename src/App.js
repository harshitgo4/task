import './output.css';
import React from 'react';
import Navbar from './components/navbar';
import Header from './components/Header';
import Pricing from './components/pricing';
import Login from './components/login';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <section id="login">
          <Login />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
