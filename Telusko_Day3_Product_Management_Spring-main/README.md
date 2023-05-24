# Product Management Application

This is a simple application for managing products. It allows you to add products and retrieve them based on different criteria. The application is built using Spring Boot and uses an online PostgreSQL database provided by CloudClusters. 

## Database Connection Details

- Host: postgresql-127679-0.cloudclusters.net
- Port: 18372
- IP Address: 68.64.164.108

## Application Flow

1. The application starts in the `ProductSpringApplication` class.
2. Inside the `main` method, an instance of the `ProductService` class is created using Spring's dependency injection.
3. Products are added to the database using the `addProduct` method of the `ProductService` class.
4. All products are retrieved from the database using the `getAllProducts` method of the `ProductService` class.
5. The retrieved products are printed to the console.

## Project Structure

The project consists of the following classes:

- `Product` class: Represents a product with properties like `name`, `type`, `place`, and `warranty`. It has getter and setter methods for these properties. The `toString` method provides a string representation of the product.

- `ProductDB` interface: Extends the `JpaRepository` interface provided by Spring Data JPA. It enables database operations on the `Product` entity.

- `ProductService` class: A service component that provides methods to add and retrieve products. It uses the `ProductDB` interface to interact with the database. The `addProduct` method adds a product, the `getAllProducts` method retrieves all products, and the `getProduct` method is not implemented.

- `ProductSpringApplication` class: The main class of the application. It is annotated with `@SpringBootApplication` to enable Spring Boot features. In the `main` method, an instance of the `ProductService` class is created using dependency injection. Products are added to the database and retrieved using the service.

- `application.properties` file: Contains configuration properties for the application, including the database connection details.

## Running the Application

To run the application:

1. Ensure you have Java and Maven installed on your system.
2. Clone the repository and navigate to the project's root directory.
3. Update the `application.properties` file with the provided database connection details.
4. Build the project using the command: `mvn clean install`.
5. Run the application using the command: `mvn spring-boot:run`.
6. The products will be added to the database and printed to the console.

Note: This README file provides a beginner-friendly explanation of the project and its components. The code demonstrates basic usage of Spring Boot and database operations.
