//test function to return a random element
export default function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}