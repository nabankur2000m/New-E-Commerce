import React from 'react';
const foodItems = [
  {
    id: 1,
    name: 'Pizza',
    price: 10,
    imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg',
  },
  {
    id: 2,
    name: 'Burger',
    price: 7,
    imageUrl: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg',
  },
  {
    id: 3,
    name: 'Pasta',
    price: 8,
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg',
  },
];

function Home({ addToCart }) {
  return (
    <div className="home">
      <h1>Welcome to Our Food Store</h1>
      <ul className="food-list">
        {foodItems.map((item) => (
          <li key={item.id} className="food-item">
            <span className="food-title">{item.name}</span>
            <button onClick={() => addToCart(item)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
