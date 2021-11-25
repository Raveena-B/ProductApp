
import  './App.css';
import './ProductData';
import ProductData from './ProductData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className = "Topbar">
          <img src ='http://www.equiti.com/media/11666/amazon.jpg ' alt ='Amazon logo' />
        </nav>
      </header>
      <div className ="Maincontainer">
        <div className="productPreview">
          <img src = 'https://imgur.com/iOeUBV7.png'/>
        </div>
        <div className="productData">
          <h1>FitBit 19 - The Smartest <br/> Watch</h1>
          <p><b>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</b></p>
          <h3>Select Colour</h3>
          <div className ="productData">

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
