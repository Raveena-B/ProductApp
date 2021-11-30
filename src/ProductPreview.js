import React from "react";
import './ProductPreview.css';
import './ProductData';



const ProductPreview = (props) => {

    return(
        <div className="ProductPreview">
             <img src = 'https://imgur.com/iOeUBV7.png'/>
          
          {/* <div className="TimeSection">
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}

          <div className="HeartBeatSection">
              ❤️
            <p>78</p>
          </div>
        </div>
       
    );
}

export default ProductPreview;