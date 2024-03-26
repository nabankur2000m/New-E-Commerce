import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  let { productId } = useParams(); 
  
  const product = {
    id: productId,
    title: 'Men Navy Slim Fit Check Full Sleeves Casual Shirt',
    price: 999,
    imageUrl: 'https://imagescdn.planetfashion.in/img/app/product/7/785416-9136818.jpg?auto=format&w=494.40000000000003',
    description: 'Showcase your refined sartorial taste in this Navy Check shirt from Louis Philippe Sport at a Casual event. Tailored in Slim Fit , this shirt features a Regular Collar , Full Sleeves , and is crafted from exquisite 100% Cotton.',
  };

  const reviews = [
    { author: "Kavya Mishra", content: "Great quality shirt, fits perfectly." },
    { author: "Malay Dave", content: "Love the texture and the color. Highly recommended!" }
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.title} className="product-detail-image"/>
      </div>
      <div className="product-info-container">
        <h1>{product.title}</h1>
        <p className="product-price">Price: Rs.{product.price}</p>
        <p>{product.description}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="product-reviews-container">
        <h2>Reviews</h2>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.author}</strong>: {review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
