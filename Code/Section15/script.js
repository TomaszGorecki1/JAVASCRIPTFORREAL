//importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// // console.log(price, qt);
// // addToCart(`bread`, 5);
// console.log(`imporing module`);

// ShoppingCart.addToCart('bread', 5);

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // const last = getLastPost();
// // last.then(last => console.log(last));

// const last2 = await getLastPost();
// console.log(last2);
// import * as ShoppingCart from './shoppingCart.js';

// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart.addToCart(`apple`, 4);
// console.log(ShoppingCart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// console.log(stateClone);
// state.user.loggedIn = false;
// console.log(stateClone);

// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone);

import cloneDeep from 'lodash-es';

if (module.hot) {
  module.hot.accept();
}
