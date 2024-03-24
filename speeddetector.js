function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        window.alert("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            window.alert("License suspended");
        } else {
            window.alert("Points: " + demeritPoints);
        }
    }
}

// Prompt the user to input the speed
const inputSpeed = window.prompt("Enter the speed of the car:");

// Convert the input to a number and call the function
const speed = parseFloat(inputSpeed);
calculateDemeritPoints(speed);