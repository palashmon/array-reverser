function isArray(arr: any): arr is any[] {
	return Array.isArray(arr);
}

export default function arrayReverser<T>(
	arr: T[],
	start: number = 0,
	end: number = arr.length
): T[] {
	if (!isArray(arr)) {
		throw new Error("Input is not an array.");
	}

	if (start < 0 || start > arr.length || end < start || end > arr.length) {
		throw new Error("Invalid start or end index.");
	}

	const reversedArray = arr
		.slice(0, start)
		.concat(arr.slice(start, end).reverse())
		.concat(arr.slice(end));

	return reversedArray;
}
