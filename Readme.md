# Product Management App

Welcome to the Product Management app! This web application allows you to efficiently manage and track your products. It consists of a frontend built with React and a backend built with Spring Boot. The application uses an online PostgreSQL database to store and retrieve product data.

## Getting Started

To run the application on your local machine, follow these steps:

### Prerequisites

- Node.js
- Java Development Kit (JDK)
- Your preferred IDE (IntelliJ, Eclipse, etc.)

### Running the React App

1. Open your terminal and navigate to the project directory.
2. Run the command `npm install` to install the required dependencies.
3. Run the command `npm start` to start the React app.
4. The React app will be accessible at [http://localhost:3000](http://localhost:3000).

### Running the Spring Boot Application

1. Open your preferred IDE and import the Spring Boot project.
2. Ensure that the necessary dependencies are installed and configured correctly.
3. Start the Spring Boot application by running the main class.
4. The Spring Boot app will be accessible at [http://localhost:8080](http://localhost:8080).

## Application Flow

Once both the React app and Spring Boot app are running, the application flow works as follows:

1. Users interact with the React app's user interface.
2. They can perform actions like adding a new product, deleting a product, or viewing the list of products.
3. When a user performs an action, the React app sends an HTTP request to the Spring Boot app.
4. The Spring Boot app receives the request, processes it, and performs the required operations.
5. The Spring Boot app interacts with the online PostgreSQL database to store and retrieve product data.
6. After processing the request, the Spring Boot app sends back a response to the React app.
7. The React app receives the response and updates its user interface accordingly.

## Online PostgreSQL Database

The application uses an online PostgreSQL database hosted at `postgresql-127679-0.cloudclusters.net` with port `18372`. This database stores all the product data, including the product name, type, place, and warranty details.

**Note**: Please ensure that the React app is running on port 3000 and the Spring Boot app is running on port 8080 for successful communication between the two.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

Enjoy managing your products with ease using the Product Management app! 📦💻🌟
