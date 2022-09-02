import React from "react";

function Header(props) {
  return (
    <div className="App">
        <div className="add-to-cart">
          <span className="cart-count">{props.data.length}</span>
            <img src="../images/cart.png" alt="cart" />
        </div>
    </div>
  );
}
export default Header;
