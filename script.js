// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

//add method to the car prototype.
Car.prototype = function getMakeModel(){
	return this.make+" "+this.model;
}


// console.log(Function.__proto__.__proto__);

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	return topSpeed;
}

//inherit the Car prototpye.
SportsCar.prototype = Car;
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype = function getToSpeed() {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
