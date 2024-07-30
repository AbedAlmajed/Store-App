# Store App

## Overview

The Store App is a simple eCommerce application that showcases a list of products using a React frontend and an Express backend. The application fetches product data from a mock API and displays it in a visually appealing way using Bootstrap for styling. Additionally, it includes a detailed view of individual products.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Express
- **API**: Fake Store API (https://fakestoreapi.com)

## Features

- **Responsive Product Listing**: View a list of products that adapts to different screen sizes.
- **Hover Effects on Product Cards**: Interactive hover effects on product cards for a better user experience.
- **Product Details Page**: View detailed information about a specific product, including title, price, description, category, and rating.
- **Integration with Mock API**: Fetch product data from the Fake Store API and display it in the app.

## Usage

- **Homepage**: Displays a list of products fetched from the API.
- **Product Cards**: Each product card includes a preview image, title, and price. Hover effects are applied to enhance interactivity.
- **Product Details Page**: Click on a product card to navigate to a detailed view of the product. The details page includes:
  - Product Image
  - Title
  - Price
  - Description
  - Category
  - Rating (rate and count of reviews)

## API Endpoints

- **Products List**: `GET http://localhost:5000/api/products`  
  Fetches a list of all products.

- **Product Details**: `GET http://localhost:5000/api/products/:id`  
  Fetches details for a specific product by its ID.

## Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute to the development of this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
