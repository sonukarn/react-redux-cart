import React from "react";

function Home(props) {
  return (
    <div className="App"> 
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="../images/mob.png" alt="mob" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>
            props.addToCartHandler({price:1000,name:'I Phone 11'})
            }>Add to Cart</button>
            <button className="btn-remove" onClick={()=>
            props.removeToCartHandler()
            }>Remove to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
