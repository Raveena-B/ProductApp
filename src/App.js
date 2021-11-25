
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
          <h1 className="productTitle">{ProductData.title}</h1>
          <p className="productDescription">{ProductData.description}</p>
          <h3 className="sectionHeading">Select Colour</h3>
          <div>
            <img className= "productImage,selectedProductImage" src='https://imgur.com/iOeUBV7.png' alt="Black Colored"/>
            <img className="productImage" src='https://imgur.com/PTgQlim.png' alt="Red Colored"/>
            <img className="productImage" src='https://imgur.com/Mplj1YR.png' alt="Blue Colored"/>
            <img className="productImage" src='https://imgur.com/xSIK4M8.png' alt="Purple Colored"/>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
