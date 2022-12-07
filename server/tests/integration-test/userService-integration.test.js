import UserModel from "../../models/userModel.js";

const {errorMessage} = require("../../services/userService.js");

test('Get error if user already exist', () => {
    //const newUser = UserModel.findOne({email: "test99999@test.com"});
    const existingUser = UserModel.findOne({email: "test1@test.com"});

    const firstName = "test";
    const lastName = "test";
    const password = "123456"
    const confirmPassword = "123456"

    const error1 = errorMessage(existingUser, firstName, lastName, password, confirmPassword);
    //const error2 = errorMessage(newUser, firstName, lastName, password, confirmPassword);

    //expect(error2).toBe(false);
    expect(error1).toBe("User already exist");
});

