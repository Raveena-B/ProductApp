import  './App.css';
import './ProductData';
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';



function App() {

  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() :'0' + new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className = "Topbar">
          <img src ='http://www.equiti.com/media/11666/amazon.jpg ' alt ='Amazon logo' />
        </nav>
      </header>
      <div className ="Maincontainer">
        <div className="productPreview">
          
          <ProductPreview/>

        </div>
        <div className="productData">
          <h1 className="productTitle">{ProductData.title}</h1>
          <p className="productDescription">{ProductData.description}</p>
          <h3 className="sectionHeading">Select Colour</h3>
          <div>
            <img className= "productImage1" src='https://imgur.com/iOeUBV7.png' alt="Black Colored"/>
            <img className="productImage" src='https://imgur.com/PTgQlim.png' alt="Red Colored"/>
            <img className="productImage" src='https://imgur.com/Mplj1YR.png' alt="Blue Colored"/>
            <img className="productImage" src='https://imgur.com/xSIK4M8.png' alt="Purple Colored"/>

          </div>
          <h3 className="Features">Features</h3>

          <button className="TimeBtn" >Time</button>
          <button className="RateBtn">Heart Rate</button><br/>
          <button className="BuyBtn">Buy Now</button>
        </div>

      </div>
    </div>
  );
}

export default App;
