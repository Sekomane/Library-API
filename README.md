# Library API

A **RESTful API** for managing a library system with **Authors** and **Books**, built with **TypeScript** and **Express**.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Installation](#installation)  
4. [Running the API](#running-the-api)   
7. [Error Handling](#error-handling)  
8. [Screenshots](#screenshots)  

---

## Overview

This API allows librarians to:

- Add, update, list, and delete authors.  
- Add, update, list, and delete books.  
- Link books to authors.  
- Search books by title, year, or author.  

All data is stored **in-memory** (resets when the server restarts).

---

## Features

- CRUD for **Authors** (`/authors`)  
- CRUD for **Books** (`/books`)  
- Middleware for logging requests  
- Input validation for missing or invalid fields  
- Centralized error handling: `404`, `400`, `409`  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sekomane/Library-API.git
cd Library-API
```

2. Install dependancies:
   ```
   npm install
   ```
   
3.Run the server in development
```
npm run dev
```
---

## Running the API
- Use Postman
- eg GET http://localhost:5000/authors

  ## Error Handling
  - 400 Bad Request: Missing or invalid input
  - 404 Not Found: Author or book not found
  - 409 Conflict: Duplicate book

## screenshots
