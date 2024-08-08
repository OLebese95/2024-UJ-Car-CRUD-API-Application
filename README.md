[![Node.js CI](https://github.com/OLebese95/2024-UJ-Car-CRUD-API-Application/actions/workflows/node.js.yml/badge.svg)](https://github.com/OLebese95/2024-UJ-Car-CRUD-API-Application/actions/workflows/node.js.yml)
# 2024-UJ-Car-CRUD-API-Application

## Overview

This project is a Cars CRUD (Create, Read, Update, Delete) application that allows users to manage a list of cars. It provides functionality to view, add, update, and delete car details using a RESTful API. The application is built using Alpine.js for frontend interactivity and Axios for handling HTTP requests.

## Features

- **View Cars**: Display a list of cars with their make, model, color, and registration number.
- **Add New Car**: Add a new car to the list by providing its make, model, color, and registration number.
- **Update Car Details**: Update the make, model, and color of an existing car using its registration number.
- **Delete Car**: Delete a car from the list by selecting its registration number.

## API Endpoints

- **Get Cars**
  - **URL**: `http://localhost:3000/api/carList/`
  - **Method**: `GET`
  - **Description**: Retrieves the list of all cars.

- **Add Car**
  - **URL**: `http://localhost:3000/api/carList/addInfo`
  - **Method**: `POST`
  - **Body**: 
    ```json
    {
      "make": "string",
      "model": "string",
      "color": "string",
      "reg_number": "string"
    }
    ```
  - **Description**: Adds a new car to the list.

- **Update Car**
  - **URL**: `http://localhost:3000/api/carList/updateInfo`
  - **Method**: `PUT`
  - **Body**: 
    ```json
    {
      "color": "string",
      "make": "string",
      "model": "string",
      "reg_number": "string"
    }
    ```
  - **Description**: Updates the make, model, and color of a car identified by its registration number.

- **Delete Car**
  - **URL**: `http://localhost:3000/api/carList/deleteInfo`
  - **Method**: `DELETE`
  - **Body**: 
    ```json
    {
      "color": "string",
      "make": "string",
      "model": "string",
      "reg_number": "string"
    }
    ```
  - **Description**: Deletes a car identified by its registration number.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/cars-crud-app.git
   cd cars-crud-app

npm install
npm start

The application will be available at http://localhost:3000.

Technology Stack
Frontend: Alpine.js, Axios, HTML, CSS
Backend: Node.js with Express.js
Database: In-memory storage (for demo purposes)
Author
Name: Ofentse Lebese
Email: fentselebese@gmail.com
