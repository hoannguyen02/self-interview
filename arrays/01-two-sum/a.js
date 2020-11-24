console.log(
    `Indices of two numbers is: `,
    indicesOfTwoNumbersAddUpToTarget([2, 7, 11, 15], 9)
);

function indicesOfTwoNumbersAddUpToTarget(numbers, target) {
    const numbersMap = {};
    for (let i = 0; i < numbers.length; i++) {
        const numberToFind = target - numbers[i];
        if (numbersMap[numberToFind] !== undefined) {
            return [numbersMap[numberToFind], i];
        } else {
            numbersMap[numbers[i]] = i;
        }
    }

    return null;
}

// function indicesOfTwoNumbersAddUpToTarget(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         const numberToFind = target - numbers[i];
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[j] === numberToFind) {
//                 return [i, j];
//             }
//         }
//     }

//     return [];
// }
