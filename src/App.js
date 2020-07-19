import React from 'react';
import { Route } from 'react-router-dom';
import {  } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './components/Products';
import BlogForm from './components/BlogForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/home' component={Home} />
      <Route path='/Signin' component={ Signin} />
      <Route path='/Signup' component={Signup} />
      <Route path='/Products' component={Products} />
      <Route path='/Blogs' component={BlogForm} />
      <Route path='/profile' component={Profile} />

     <Footer />
    </div>
  );
}
export default App;
