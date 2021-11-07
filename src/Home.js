import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
        />


        <div className="home__row">
            <Product 
            id="123456"
            title="The lean startup" 
            price={29.99}
            image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
            rating={5}/>
            <Product 
             id="884126287"
            title="The lean startup" 
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={3}/>
            
        </div>
        <div className="home__row">
            <Product 
             id="987411"
            title="The lean startup bom chicki" 
            price={29.99}
            image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
            rating={4}/>
            <Product 
             id="115418"
            title="The lean startup" 
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={2}/>
            <Product 
             id="12345656656"
            title="The lean startup" 
            price={29.99}
            image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
            rating={5}/>
            
        </div>
        <div className="home__row">
            <Product 
             id="12345678"
            title="The lean startup" 
            price={29.99}
            image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
            rating={5}/>
           
            
        </div>
      </div>
    </div>
  );
}

export default Home;
