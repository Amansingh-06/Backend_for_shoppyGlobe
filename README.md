# ShoppyGlobe API

This is the backend API for the ShoppyGlobe e-commerce application, built using Node.js, Express.js, and MongoDB.

## Project Overview

The API provides CRUD operations for products and a shopping cart, as well as user authentication, ensuring secure access to the cart for logged-in users only.

## Features

1. **Product Management**
   - Fetch all products: `GET /api/products`
   - Fetch product details by ID: `GET /api/products/:id`

2. **Cart Management**
   - Add a product to cart: `POST /cart/add`
   - Update product quantity in cart: `PUT /cart/item/:id`
   - Remove a product from cart: `DELETE /cart/item/:id`

3. **User Authentication**
   - Register a new user: `POST /user/register`
   - Log in and receive a JWT token: `POST /user/login`

4. **Data Storage**
   - MongoDB is used for persisting product and cart data.

5. **Error Handling & Validation**
   - Includes input validation and error handling for robust and secure API performance.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amansingh-06/Backend_for_shoppyGlobe.git
