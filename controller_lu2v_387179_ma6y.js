const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
grape


const removeDuplicates = array => Array.from(new Set(array));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
25,5,62,67,18,95,34,80,79,12,38,63,15,28,98,94,1,50,39,87,98,89,3,99,11,59,10,64,50,10,11,8,5,84,55,37,96,9,77,2,62,61,97,47,17,30,57,78,6,30,63,93,43,92,80,40,74,56,21,78,89,23,31,97,62,12,93,91,45,66,69,28,36,92,22,18,74,49,71,85,22,30,92,25,70,72,49,42,26,57,5,93 - 22
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
orange - false
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
44 - 66,50,44,97,57,29,72,29,90,81,20,96,87,20,87,75,12,36,95,38,77,35,47,92,18,75,1,25,97,49,17,16,91,32,81,65,15,83,48,17,90,11,60,28,23,22,75,95,13,42,44,16,26,10,58,12,16,31
let array = getRandomArray(); array.forEach(item => console.log(item));
52,50,82,84,81,13,85,47,76,19,33,51,36,83,99,54,40,84,36,22,11,23,70,91,22,53,7,26,88,82,78,10,13,63,10,20,91,88,72,68,57,50,43,48,92,69,2,26,54,47,48,93,90,21,22,91,68,82,23,96,32,47,5,64,66,86,55,3,89,13,26,18,49,45,69,46,28,68,57,4,36,57,37,77 / 79,65,73,67,72,23,97,95,9,63,26,73,13,62,70,25,78,41,37,25,19,5,77,29,37,7,62,28,76,82
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
