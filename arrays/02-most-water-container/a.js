
console.log(`Most water container is: `, calcMostWaterContainer([1,8,6,2,5,4,8,3,7]));

function calcMostWaterContainer(heights) {
    let maxArea = 0;
    let i = 0;
    let j = heights.length - 1;
    while(i<j) {
        const height = Math.min(heights[i], heights[j]);
        const width = j - i;
        const newMax = height*width;
        maxArea = Math.max(newMax, maxArea);
        if(heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;

}