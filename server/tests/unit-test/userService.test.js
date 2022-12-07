const { passwordCharConstrain, nameCharConstrain, errorMessage} = require('../../services/userService.js');

test('Password for sign-in complies with constrains', () => {
    const pw1 = passwordCharConstrain("***");
    expect(pw1).toBe(false);
    const pw2 = passwordCharConstrain("********");
    expect(pw2).toBe(true);
});

test('Name for sign-in complies with constrains', () => {
    const name1 = nameCharConstrain("n");
    expect(name1).toBe(false);
    const name2 = nameCharConstrain("Eddy");
    expect(name2).toBe(true);
});

test('Error message for sign up', () => {

    const firstName = errorMessage("n","");
    expect(name1).toBe(false);
    const name2 = nameCharConstrain("Eddy");
    expect(name2).toBe(true);
});