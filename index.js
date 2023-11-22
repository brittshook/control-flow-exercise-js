// Part 1: Growing Pains

const areaOfPlantCollectionInSqrMeters = (5 ** 2) * Math.PI;
const minSpacePerPlantInSqrMeters = 0.8;
const numOfPlantsAtStart = 20;
const plantMultiplierPerWeek = 2;

// Calculate max capacity of garden
const maxCapacityOfPlants = areaOfPlantCollectionInSqrMeters / minSpacePerPlantInSqrMeters;

// Task: Predict the plant growth after a specific number of weeks.
function plantGrowth(weeks) {
    return numOfPlantsAtStart * (weeks * plantMultiplierPerWeek);
};

// Task: Implement control flow to make decisions on whether the plants should be pruned, monitored, or planted:
function tendPlants(weeks) {
    const plants  = plantGrowth(weeks);

    if (plants > (0.8 * maxCapacityOfPlants)) {
        return 'Prune';
    } else if (plants >= (0.5 * maxCapacityOfPlants)) {
        return 'Monitor';
    } else {
        return 'Plant';
    }
};

// Task: Show outputs after 1, 2, and 3 weeks of growth
console.log(tendPlants(1));
console.log(tendPlants(2));
console.log(tendPlants(3));
