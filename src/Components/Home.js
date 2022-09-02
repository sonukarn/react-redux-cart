import React from "react";

function Home() {
  return (
    <div className="App">
        <div className="add-to-cart">
            <img src="../images/cart.png" alt="cart" />
        </div>
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
