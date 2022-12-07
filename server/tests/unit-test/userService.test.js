const { passwordCharConstrain, nameCharConstrain } = require('../../services/userService.js');

test('Password for sign-in complies with constrains', () => {
    const pw1 = passwordCharConstrain("***");
    const pw2 = passwordCharConstrain("********");

    expect(pw1).toBe(false);
    expect(pw2).toBe(true);
});



test('Name for sign-in complies with constrains', () => {
    const name1 = nameCharConstrain("n");
    const name2 = nameCharConstrain("Eddy");

    expect(name1).toBe(false);
    expect(name2).toBe(true);
});