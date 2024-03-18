const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const formatDate = date => new Date(date).toLocaleDateString();
kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
apple


const findSmallestNumber = numbers => Math.min(...numbers);
 + 2,52,50,24,77,34,81,97,13,99,90,89,40,23,38,82,69,52,39,88,67,22,35,70,99,17,44,23,45,31,41,60,86,67,58

const isEven = num => num % 2 === 0;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
