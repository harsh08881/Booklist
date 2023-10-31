# API Usage README

This README provides information on how to use the API you've created using Node.js, Express, and MongoDB to manage a collection of books. Below are the details for different API endpoints and their respective functionalities.

## Getting Started

Before using the API, make sure you have Node.js and MongoDB set up on your local machine. You will also need to install the required Node.js packages listed in your code, such as `express`, `mongoose`, `cors`, and `body-parser`. Additionally, set up a `.env` file to configure your environment variables.

### Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Configure your environment variables in a `.env` file, including your MongoDB connection string.

```env
DB_URI=your_mongodb_connection_string
PORT=3003
```

4. Run the application using `npm start` or `node your_app_file.js`.

## API Endpoints

### 1. Add a New Book

- **HTTP Method:** POST
- **Endpoint:** `/api/books`
- **Description:** Add a new book to the database.
- **Request Body:** JSON object representing the book to be added.
- **Response:** The newly added book as a JSON object.

### 2. Get All Books

- **HTTP Method:** GET
- **Endpoint:** `/api/books`
- **Description:** Retrieve all books from the database.
- **Response:** A JSON array containing all books in the database.

### 3. Update a Book by ID

- **HTTP Method:** POST
- **Endpoint:** `/books/:id`
- **Description:** Update an existing book by its unique ID.
- **Request Parameters:** The `:id` parameter in the URL should be the unique ID of the book to be updated.
- **Request Body:** JSON object representing the updated book data.
- **Response:** The updated book as a JSON object.

### 4. Get a Single Book by ID

- **HTTP Method:** GET
- **Endpoint:** `/:id`
- **Description:** Retrieve a single book from the database by its unique ID.
- **Request Parameters:** The `:id` parameter in the URL should be the unique ID of the book to retrieve.
- **Response:** The book as a JSON object.

### 5. Delete a Single Book by ID

- **HTTP Method:** DELETE
- **Endpoint:** `/api/books/:id`
- **Description:** Delete a book from the database by its unique ID.
- **Request Parameters:** The `:id` parameter in the URL should be the unique ID of the book to delete.
- **Response:** A success message indicating that the book was deleted.

## Example Usage

Below are some example usages of the API endpoints using a tool like `curl` or a similar API testing tool:

1. Add a new book:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Sample Book", "author":"John Doe"}' http://localhost:3003/api/books
```

2. Get all books:

```bash
curl http://localhost:3003/api/books
```

3. Update a book by ID:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Updated Book", "author":"Jane Smith"}' http://localhost:3003/books/your_book_id
```

4. Get a single book by ID:

```bash
curl http://localhost:3003/your_book_id
```

5. Delete a single book by ID:

```bash
curl -X DELETE http://localhost:3003/api/books/your_book_id
```

## Error Handling

The API handles errors gracefully and provides appropriate error messages and status codes in case of issues.

- `404 Not Found`: When trying to access or update a book with an ID that doesn't exist.
- `500 Internal Server Error`: For general server errors.

Make sure to handle these error responses in your client application.

This README should help you understand how to use and interact with the API you've created. Feel free to customize it further based on your specific use case or add more detailed instructions for your users if needed.