// Part 1: Growing Pains

const areaOfGardenInSqrMeters = (5 ** 2) * Math.PI;
const minSpacePerPlantInSqrMeters = 0.8;
let startNum = 20;
const plantMultiplierPerWeek = 2;

// Calculate max capacity of garden
maxCapacityOfPlants = Math.floor(areaOfGardenInSqrMeters / minSpacePerPlantInSqrMeters);

// Task: Predict the plant growth after a specific number of weeks.
// Task: Implement control flow to make decisions on whether the plants should be pruned, monitored, or planted:
function tendPlants(weeks, prune = true) {
    let action;
    let plants = startNum;

    for (let week = 1; week <= weeks; week++) {
        plants *= plantMultiplierPerWeek;

        // Plants would naturally stop growing when at capacity, so return to max capacity if over that
        if (plants > maxCapacityOfPlants && prune) {
            plants = maxCapacityOfPlants;
        }

        if (plants > (0.8 * maxCapacityOfPlants) && prune) {
            plants -= 5; // Simulate making room for new plants by reducing plant count
            action = 'Prune';
        } else if (plants >= (0.5 * maxCapacityOfPlants)) {
            action = 'Monitor';
        } else {
            plants += 5; // Simulate planting by increasing plant count
            action = 'Plant';
        };
    }

    console.log(`Week ${weeks}: ${action}, ${plants} total plants`);
    return plants;
};

// Show results for 1, 2, and 3 weeks of growth as inputs
tendPlants(1);
tendPlants(2);
tendPlants(3);


// // Part 2: Thinking Bigger

// // Task: determine the amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
startNum = 100;
const numOfPlantsAfter10Weeks = tendPlants(10, false);
const areaOf2ndGardenInSqrMeters = numOfPlantsAfter10Weeks * minSpacePerPlantInSqrMeters;
console.log(`Area needed in second garden is ${areaOf2ndGardenInSqrMeters} meters squared.`);

// // Task: If the space remained circular, what would be the radius of this expanded garden?
const radiusOf2ndGardenInMeters  = Math.sqrt(areaOf2ndGardenInSqrMeters / Math.PI);
console.log(`The radius of the second garden should be ${radiusOf2ndGardenInMeters.toFixed(2)} meters.`);


// // Part 3: Errors in Judgement
try {
    startNum = 100;
    const areaNeeded = startNum * minSpacePerPlantInSqrMeters;

    if (areaNeeded > areaOfGardenInSqrMeters) {
        throw(`${startNum} plants will not fit in the original garden.`)
    } else {
        console.log(`Yay, all ${startNum} plants will fit in the original garden.`)
    }
} catch(err) {
    console.log(err);
};