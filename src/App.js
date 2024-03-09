import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const brCss = {
  border: '0px solid translucent'
};

function App() {
  return (
    <div className='body'>
    <Header />
    <br style={brCss}></br>
    <Card />
    <Card />
    <Card />
    </div>
  );
}
//Added   
export default App;
