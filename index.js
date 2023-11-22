// Part 1: Growing Pains

const areaOfGardenInSqrMeters = (5 ** 2) * Math.PI;
const minSpacePerPlantInSqrMeters = 0.8;
const startNumOfPlants = 20;
const plantMultiplierPerWeek = 2;

// Calculate max capacity of garden
function maxCapacityOfPlants(area = areaOfGardenInSqrMeters) {
    return area / minSpacePerPlantInSqrMeters;
};

// Task: Predict the plant growth after a specific number of weeks.
function plantGrowth(weeks, startNum = startNumOfPlants) {
    return startNum * (plantMultiplierPerWeek ** weeks);
};

// Task: Implement control flow to make decisions on whether the plants should be pruned, monitored, or planted:
function tendPlants(weeks, startNum, area) {
    plants = plantGrowth(weeks, startNum);
    let action;

    if (plants > (0.8 * maxCapacityOfPlants(area))) {
        action = 'Prune';
    } else if (plants >= (0.5 * maxCapacityOfPlants(area))) { 
        action = 'Monitor';
    } else {
        action = 'Plant';
    };

    console.log(`Total plants after ${weeks} weeks: ${plants}`);
    console.log(`You should ${action}`);
};

// Show results for 1, 2, and 3 weeks of growth as inputs
tendPlants(1);
tendPlants(2);
tendPlants(3);


// Part 2: Thinking Bigger

// Task: determine the amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
const startNumOfPlantsIn2ndGarden = 100;
const numOfPlantsIn2ndGardenAfter10Weeks = plantGrowth(10, startNumOfPlantsIn2ndGarden);
const areaOf2ndGardenInSqrMeters = numOfPlantsIn2ndGardenAfter10Weeks * minSpacePerPlantInSqrMeters;
console.log(`Area needed in second garden is ${areaOf2ndGardenInSqrMeters} meters squared`);

// Task: If the space remained circular, what would be the radius of this expanded garden?
const radiusOf2ndGardenInMeters  = Math.sqrt(areaOf2ndGardenInSqrMeters / Math.PI);

console.log(`The radius of the second garden should be ${radiusOf2ndGardenInMeters.toFixed(2)} meters`);