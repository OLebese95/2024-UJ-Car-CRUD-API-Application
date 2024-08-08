import express from 'express';
import cors from 'cors';
import {carsForTown} from './carForTown.js';
import {cars} from './carForTown.js';



// Create a new express application instance
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Create a default route

// Get the whole list
app.get('/api/carList/', function (httpRequest, httpResponse) {
    const town = httpRequest.query.town;
    const cars = carsForTown(town);
    httpResponse.json ({
    
        list: cars
       
    });
});

//Get the list for specific town

app.get('/api/carListTown/:town', function (httpRequest, httpResponse) {
    const town = httpRequest.params.town; 
    const cars = carsForTown(town);
    httpResponse.json({
        townname: town,
        list: cars
    });
});


// Create or add new information to the list

app.post('/api/carList/newInfo', function (httpRequest, httpResponse) {
    const { color, make, model, reg_number, town } = httpRequest.body;

    const newCar = {
        color: color,
        make: make,
        model: model,
        reg_number: reg_number
    };
    cars.push(newCar);

    
    const townCars = carsForTown(town);

    httpResponse.json({
        status: 'Success',
        message: 'New car has been added!',
        cars: townCars 
    });
});

// Update information in the list

app.put('/api/carList/updateInfo', function (httpRequest, httpResponse) {
    const { color, make, model, reg_number } = httpRequest.body;

   
    const carIndex = cars.findIndex(car => car.reg_number === reg_number);

    if (carIndex === -1) {
    
        return httpResponse.status(404).json({
            status: 'Error',
            message: 'Car not found!'
        });
    }

    // Update the car details
    cars[carIndex] = {
        color: color || cars[carIndex].color,
        make: make || cars[carIndex].make,
        model: model || cars[carIndex].model,
        reg_number: reg_number 
    };

    httpResponse.json({
        status: 'Success',
        message: 'Car has been updated!',
        cars: cars
    });
});

// Delete information in the list

app.delete('/api/carList/deleteInfo', function (httpRequest, httpResponse) {
    const { color, make, model, reg_number } = httpRequest.body;

    // Find the index of the car to delete
    const carIndex = cars.findIndex(car => 
        car.color === color &&
        car.make === make &&
        car.model === model &&
        car.reg_number === reg_number
    );

    if (carIndex !== -1) {
        // Remove the car from the array
        cars.splice(carIndex, 1);

        httpResponse.json({
            status: 'Success',
            message: 'Car has been deleted!',
            cars: cars
        });
    } else {
        httpResponse.status(404).json({
            status: 'Error',
            message: 'Car not found!'
        });
    }
});

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
