console.log(
    `Units of rain water can be trap are: `,
    unitsOfRainWater([4, 2, 0, 3, 2, 5])
);

function unitsOfRainWater(heights) {
    let units = 0;

    for (let i = 0; i < heights.length; i++) {
        let left = i;
        let maxLeft = 0;
        let right = i;
        let maxRight = 0;
        while (left >= 0) {
            maxLeft = Math.max(maxLeft, heights[left]);
            left--;
        }
        while (right < heights.length) {
            maxRight = Math.max(maxRight, heights[right]);
            right++;
        }
        const currentUnits = Math.min(maxLeft, maxRight) - heights[i];
        if (currentUnits > 0) {
            units += currentUnits;
        }
    }

    return units;
}
