import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Card() {
  const [product, setProduct] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container mt-5">
      <Link to={"/"} >Return To Home Page</Link>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ${product.price.toFixed(2)}
              </h6>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
