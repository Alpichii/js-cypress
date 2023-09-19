// falsy values = false, 0, NaN, null, '' or "", undefined
//truthy values= true, any number but not zero, any string but not empty

if("abc") {
    console.log('HELLO');
}
else {
    console.log('WORLD');
}

console.log("" ?? "Hello"); // empty
console.log(NaN ?? "Hello"); // NaN
console.log(null ?? "Hello"); // Hello
console.log(undefined ?? "Hello"); // Hello

console.log("" || "Hello"); // Hello
console.log(NaN || "Hello"); // Hello
console.log(null || "Hello"); // Hello 
console.log(undefined || "Hello"); // Hello