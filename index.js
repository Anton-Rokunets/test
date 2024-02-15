const someArray1 = [1,2,3,4,5,6,7,8,9,10];
const result1 = {};

const result2 = someArray1.reduce((acc, item, idx) =>{
    const index = String.fromCharCode(97 + idx);
    acc[index] = item;
    return acc;
}, {});



for (let i = 0; i < someArray1.length; i++) {
    const index = String.fromCharCode(97 + i)
    result1[index] = someArray1[i]
}

console.log(result1)
console.log(result2)


const someObject1 = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: NaN, l: 0, m: 0.25, n: null, o: {}, p: [], r: Infinity, s: undefined}

const numbers = Object.values(someObject1).filter(item => typeof item === 'number' && isFinite(item));
const naturalNumbers = Object.values(someObject1).filter(item => typeof item === 'number' && Number.isInteger(item) && item > 0);
const objects = Object.values(someObject1).filter(item => item instanceof Object);

console.log(numbers)
console.log(naturalNumbers)
console.log(objects)
