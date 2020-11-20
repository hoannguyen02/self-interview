console.log(
    `Indices of two numbers is: `,
    indicesOfTwoNumbersAddUpToTarget([3, 3], 6)
)

function indicesOfTwoNumbersAddUpToTarget(numbers, target) {
    const numbersMap = {}
    for (let i = 0; i < numbers.length; i++) {
        const numberToFind = target - numbers[i]
        if (numbersMap[numberToFind] !== undefined) {
            return [numbersMap[numberToFind], i]
        } else {
            numbersMap[numbers[i]] = i
        }
    }

    return null
}
