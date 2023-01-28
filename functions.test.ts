const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array that is the same length as original array but in a different order', () => {
    const arr = [1, 2, 3, 4, 5]
    
    test("should return a different array", () => {
        expect(shuffleArray(arr)).not.toBe(arr)
    })
    test("should return an array of the same length", () => {
        expect(shuffleArray(arr).length).toEqual(arr.length)
    })
})