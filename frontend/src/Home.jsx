// // src/Home.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Home.css'; 
// import { Link } from 'react-router-dom';
// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Product List</h1>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-md-4 mb-4">
//             <div className="card product-card">
//               <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="mb-0 font-weight-bold">Price: ${product.price}</p>
//                   <Link to={`/product/${product.id}`}>View</Link>                </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
////////////////////////////
// src/Home.js
// src/Home.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/products')
//       .then(response => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching product data.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (products.length === 0) return <div>No products available.</div>;

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Product List</h1>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-md-4 mb-4">
//             <div className="card product-card">
//               <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="mb-0 font-weight-bold">Price: ${product.price}</p>
//                   <Link to={`/product/${product.id}`}>View</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
//////////

// src/Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card product-card">
              <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 font-weight-bold">Price: ${product.price}</p>
                  <Link to={`/product/${product.id}`}>View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
