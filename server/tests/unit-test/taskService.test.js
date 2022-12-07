const {calculateStartIndex} = require("../../services/taskService.js");

test('Calculate starting index of every page', () => {
     const startIndex = calculateStartIndex(8, "3");
     expect(startIndex).toBe(16);
});

/*
test('String to string array', () => {

});*/
