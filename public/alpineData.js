document.addEventListener("alpine:init", () => {
  Alpine.data('carCRUD', () => ({
    title: 'Cars CRUD APP',
    cars: [],
    filteredCars: [],
    showList: true, 
    town: 'Paarl',
    newCar: {
      make: '',
      model: '',
      color: '',
      reg_number: ''
    },
    updateCar: {
      make: '',
      model: '',
      color: ''
    },
    selectedCar: null, 

    carList() {
      axios.get(`/api/carList/`)
        .then((response) => {
          this.cars = response.data.list; 
        })
    },
    filterCars() {
      axios.get(`/api/carListTown/${this.town}`)
        .then((response) => {
          this.filteredCars = response.data.list;
          this.showFilteredHeader = this.filteredCars.length > 0; 
          console.log(this.showFilteredHeader);
          console.log(this.filteredCars);
          console.log(this.town);

          setTimeout(() => {
            this.filteredCars = [];
            this.showFilteredHeader = false; 
          }, 11000); 
        })

    },
    

    addCar() {
      axios.post(`/api/carList/newInfo`, this.newCar)
        .then((response) => {
          if (response.data.status === "Success") {
            alert(response.data.message);
          }
          this.carList();
          this.newCar = { make: '', model: '', color: '', reg_number: '' };
        })
        .catch((error) => {
          console.error('Error adding new car:', error);
        });
    },
    submitUpdateCar() {
      axios.put(`/api/carList/updateInfo`, {
        color: this.updateCar.color,
        make: this.updateCar.make,
        model: this.updateCar.model,
        reg_number: this.updateCar.reg_number
      })
      .then((response) => {
        if (response.data.status === 'Success') {
          alert(response.data.message);
          this.carList(); 
          this.updateCar = { make: '', model: '', color: '' };
        } else {
          alert('Error: ' + response.data.message);
        }
      })
      .catch((error) => {
        console.error('There was an error updating the car!', error);
        alert('Error: Unable to update the car');
      });
    },


    deleteCar() {
      if (this.selectedCar) {
        const car = JSON.parse(this.selectedCar);
        
        axios.delete('/api/carList/deleteInfo', {
          data: {
            color: car.color,
            make: car.make,
            model: car.model,
            reg_number: car.reg_number
          }
        })
        .then((response) => {
          if (response.data.status === 'Success') {
            alert(response.data.message);
            this.carList(); 
          } else {
            alert('Error: ' + response.data.message);
          }
        })
        .catch((error) => {
          console.error('There was an error deleting the car!', error);
          alert('Error: Unable to delete the car');
        });
      } else {
        alert('Please select a car to delete.');
      }
    },

    toggleList() {
      this.showList = !this.showList; 
    },
  
    init() {
      this.carList();
    }
  }));
});
