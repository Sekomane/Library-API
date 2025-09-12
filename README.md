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
- Create<img width="962" height="1141" alt="creat" src="https://github.com/user-attachments/assets/cff92ae8-dd23-494c-90cd-1b5fdc379cca" />

- Read <img width="956" height="1141" alt="image" src="https://github.com/user-attachments/assets/0458477b-d847-466d-8720-08be8973c551" />
<img width="957" height="1145" alt="GetAll" src="https://github.com/user-attachments/assets/23ddb75b-a2e6-4973-90ad-703be3086018" />

- Update![Uploading GetAll.png…]()
<img width="962" height="1132" alt="update" src="https://github.com/user-attachments/assets/ea740e78-772e-404e-b243-4a23d142e9d4" />

- Delete 
<img width="956" height="1141" alt="delete" src="https://github.com/user-attachments/assets/d133eeda-e2cf-42c4-97a4-36c3d08e7bd6" />
