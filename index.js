// Part 1: Growing Pains

const areaOfGardenInSqrMeters = (5 ** 2) * Math.PI;
const minSpacePerPlantInSqrMeters = 0.8;
const startNumOfPlants = 20;
let plantMultiplierPerWeek = 2;

// Calculate max capacity of garden
const maxCapacityOfPlants = areaOfGardenInSqrMeters / minSpacePerPlantInSqrMeters;

// Task: Predict the plant growth after a specific number of weeks.
function plantGrowth(weeks) {
    return startNumOfPlants  * (plantMultiplierPerWeek ** weeks);
};

// Task: Implement control flow to make decisions on whether the plants should be pruned, monitored, or planted:
function tendPlants(weeks) {
    plants = plantGrowth(weeks);
    let action;

    if (plants > (0.8 * maxCapacityOfPlants)) {
        action = 'Prune';
    } else if (plants >= (0.5 * maxCapacityOfPlants)) { 
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