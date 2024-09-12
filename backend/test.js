const telephone_numberRegex = /^[+234|0][0-9]{10}/;
const valid = telephone_numberRegex.test("07031234567");
console.log(valid);
