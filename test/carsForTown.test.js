import assert from "assert";
import { carsForTown } from "../carForTown.js"; 

describe('The carsForTown function', function() {

    it('should return all cars for Specific Town)', function() {
        const result = carsForTown('Bellville');
        assert.strictEqual(result.length, 7); 
      });

})
console.log(carsForTown('Bellville'));
console.log(carsForTown('Cape Town'));
console.log(carsForTown('Kuilsriver'));
console.log(carsForTown('Paarl'));
