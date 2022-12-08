const { passwordCharConstrain, nameCharConstrain, fullName} = require('../../services/userService.js');

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

test('First and last name should combine to one', () => {
    const name = fullName("Dean", "Calypso");
    expect(name).toBe("Dean Calypso");
});