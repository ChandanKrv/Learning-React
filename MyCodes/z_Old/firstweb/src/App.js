import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='container'><h2 className='text-danger'>Bootstrap Checking</h2></div>
      <Footer/>
    </div>
  );
}

export default App;

function Card() {
  return (
    <div>Card Div</div>
  )
}