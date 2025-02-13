# URL Shortener

A simple URL shortener project using Express.js and Mongoose.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
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

