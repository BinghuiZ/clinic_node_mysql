const { isValidEmail, isValidPassword } = require("../Utils/utils");


test('non valid email', () => {
   expect(isValidEmail('asdfkjhswcinasdf.om')).toEqual(false)
});

test('valid email', () => {
   expect(isValidEmail('happyClinic@google.com')).toEqual(true)
});

test('no enough charaters password', () => {
   expect(isValidPassword('asdfq')).toEqual(false)
});

test('no uppercase password', () => {
   expect(isValidPassword('asdflkj123')).toEqual(false)
});

test('no number password', () => {
   expect(isValidPassword('asdfkjhASDN')).toEqual(false)
});

test('vaile password', () => {
   expect(isValidPassword('Admin1234')).toEqual(true)
});