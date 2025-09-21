import pizzaImg from "../assets/pizza.jpg";
import hamburgerImg from "../assets/hamburger.jpg";
import breadImg from "../assets/bread.jpg";
import cakeImg from "../assets/cake.jpg";

const initialState = [
  { id: 1, name: "Pizza", price: 30, stock: 5, img: pizzaImg },
  { id: 2, name: "Hamburger", price: 15, stock: 50, img: hamburgerImg },
  { id: 3, name: "Bread", price: 20, stock: 20, img: breadImg },
  { id: 4, name: "Cake", price: 10, stock: 100, img: cakeImg },
];

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
