import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
      <h3>Mon panier:</h3>
      <ul>
        {
          cartItems.map((cartItem, index) =>
            <div key={index}>
              <li>
                Id de l'article : {cartItem.id}
              </li>
              <li>
                Quantité: {cartItem.quantity}
              </li>
            </div>
          )
        }
      </ul>
  </div>
)

export default Cart;