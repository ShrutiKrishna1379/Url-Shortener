# URL Shortener Project

This project is a simple URL shortener application built with Express.js and Mongoose. It allows users to shorten long URLs and retrieve the original URLs using the shortened versions.

## Project Structure

```
url-shortener
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── urlController.js  # Controller for handling URL operations
│   ├── models
│   │   └── urlModel.js       # Mongoose model for URL schema
│   ├── routes
│   │   └── urlRoutes.js      # Routes for URL operations
│   └── utils
│       └── index.js          # Utility functions
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/url-shortener.git
   ```

2. Navigate to the project directory:
   ```
   cd url-shortener
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Use the following endpoints to interact with the URL shortener:

   - **POST /shorten**: Create a shortened URL.
     - Request body: `{ "originalUrl": "http://example.com" }`
   
   - **GET /:shortUrl**: Retrieve the original URL using the shortened URL.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.#   U r l - S h o r t e n e r  
 