import arrayReverser from ".";

describe("array-reverser", () => {
	it("should reverse the array", () => {
		const input = [1, 2, 3, 4, 5];
		const output = arrayReverser(input);
		expect(output).toEqual([5, 4, 3, 2, 1]);
	});

	it("should reverse the array from start index", () => {
		const input = [1, 2, 3, 4, 5];
		const output = arrayReverser(input, 2);
		expect(output).toEqual([1, 2, 5, 4, 3]);
	});

	it("should reverse the array from start to end index", () => {
		const input = [1, 2, 3, 4, 5];
		const output = arrayReverser(input, 1, 4);
		expect(output).toEqual([1, 4, 3, 2, 5]);
	});

	it("should handle an empty array", () => {
		const input: number[] = [];
		const output = arrayReverser(input);
		expect(output).toEqual([]);
	});

	it("should handle start index out of bounds", () => {
		const input = [1, 2, 3, 4, 5];
		expect(() => arrayReverser(input, -1)).toThrow("Invalid start or end index.");
	});

	it("should handle end index out of bounds", () => {
		const input = [1, 2, 3, 4, 5];
		expect(() => arrayReverser(input, 1, 6)).toThrow("Invalid start or end index.");
	});

	it("should handle start index greater than end index", () => {
		const input = [1, 2, 3, 4, 5];
		expect(() => arrayReverser(input, 3, 2)).toThrow("Invalid start or end index.");
	});

	it("should handle non-array input", () => {
		const input = "not an array";
		// @ts-ignore
		expect(() => arrayReverser(input)).toThrow("Input is not an array.");
	});

	it("should not mutate the original array when reversing the entire array", () => {
		const originalArray = [1, 2, 3, 4, 5];
		const reversedArray = arrayReverser(originalArray);

		// Mutate the reversed array
		reversedArray[0] = 10;

		// Check if the original array remains unchanged
		expect(originalArray).toEqual([1, 2, 3, 4, 5]);
	});

	it("should not mutate the original array when reversing a portion of the array", () => {
		const originalArray = [1, 2, 3, 4, 5];
		const reversedArray = arrayReverser(originalArray, 1, 4);

		// Mutate the reversed array
		reversedArray[0] = 10;

		// Check if the original array remains unchanged
		expect(originalArray).toEqual([1, 2, 3, 4, 5]);
	});

	it("should return a new array instance when reversing the entire array", () => {
		const originalArray = [1, 2, 3, 4, 5];
		const reversedArray = arrayReverser(originalArray);

		// Check if the returned array is a new instance
		expect(reversedArray).not.toBe(originalArray);
	});

	it("should return a new array instance when reversing a portion of the array", () => {
		const originalArray = [1, 2, 3, 4, 5];
		const reversedArray = arrayReverser(originalArray, 1, 4);

		// Check if the returned array is a new instance
		expect(reversedArray).not.toBe(originalArray);
	});
});
