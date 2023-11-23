// Part 1: Growing Pains

const areaOfGardenInSqrMeters = (5 ** 2) * Math.PI;
const minSpacePerPlantInSqrMeters = 0.8;
const startNumOfPlants = 20;
const plantMultiplierPerWeek = 2;

// Calculate max capacity of garden
const maxCapacityOfPlants  = areaOfGardenInSqrMeters / minSpacePerPlantInSqrMeters;

// Task: Predict the plant growth after a specific number of weeks.
function plantGrowth(weeks, startNum = startNumOfPlants) {
    return startNum * (plantMultiplierPerWeek ** weeks);
};

// Task: Implement control flow to make decisions on whether the plants should be pruned, monitored, or planted:
function tendPlants(weeks, startNum) {
    const numOfPlants = plantGrowth(weeks, startNum);
    let action;

    if (numOfPlants > (0.8 * maxCapacityOfPlants)) {
        action = 'Prune';
    } else if (numOfPlants >= (0.5 * maxCapacityOfPlants)) { 
        action = 'Monitor';
    } else {
        action = 'Plant';
    };

    return `You should ${action}`;
};

// Show results for 1, 2, and 3 weeks of growth as inputs
console.log(`After 1 week, there are ${plantGrowth(1)} plants. You should ${tendPlants(1)}.`);
console.log(`After 2 week, there are ${plantGrowth(2)} plants. You should ${tendPlants(2)}.`);
console.log(`After 3 week, there are ${plantGrowth(3)} plants. You should ${tendPlants(3)}.`);


// Part 2: Thinking Bigger

// Task: determine the amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
const startNumOfPlantsIn2ndGarden = 100;
const numOfPlantsIn2ndGardenAfter10Weeks = plantGrowth(10, startNumOfPlantsIn2ndGarden);
const areaOf2ndGardenInSqrMeters = numOfPlantsIn2ndGardenAfter10Weeks * minSpacePerPlantInSqrMeters;
console.log(`Area needed in second garden is ${areaOf2ndGardenInSqrMeters} meters squared.`);

// Task: If the space remained circular, what would be the radius of this expanded garden?
const radiusOf2ndGardenInMeters  = Math.sqrt(areaOf2ndGardenInSqrMeters / Math.PI);
console.log(`The radius of the second garden should be ${radiusOf2ndGardenInMeters.toFixed(2)} meters.`);


// Part 3: Errors in Judgement
try {
    const newStartNum = 100;
    const areaNeeded = newStartNum * minSpacePerPlantInSqrMeters;

    if (areaNeeded > areaOfGardenInSqrMeters) {
        throw(`${newStartNum} plants will not fit in the original garden.`)
    } else {
        console.log(`Yay, all ${newStartNum} plants will fit in the original garden.`)
    }
} catch(err) {
    console.log(err);
};