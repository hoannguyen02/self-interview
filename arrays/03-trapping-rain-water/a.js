console.log(
    `Units of rain water can be trap are: `,
    unitsOfRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);

function unitsOfRainWater(heights) {
    let units = 0;
    let left = 0;
    let maxLeft = 0;
    let right = heights.length - 1;
    let maxRight = 0;
    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                units += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                units += maxRight - heights[right];
            }
            right--;
        }
    }
    return units;
}

// function unitsOfRainWater(heights) {
//     let units = 0;

//     for (let i = 0; i < heights.length; i++) {
//         let left = i;
//         let maxLeft = 0;
//         let right = i;
//         let maxRight = 0;
//         while (left >= 0) {
//             maxLeft = Math.max(maxLeft, heights[left]);
//             left--;
//         }
//         while (right < heights.length) {
//             maxRight = Math.max(maxRight, heights[right]);
//             right++;
//         }
//         const currentUnits = Math.min(maxLeft, maxRight) - heights[i];
//         if (currentUnits > 0) {
//             units += currentUnits;
//         }
//     }

//     return units;
// }
