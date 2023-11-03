const factorial =  require('../src');

describe('Factorial Function', () =>{

it("correctly computes factiorial of a positive integer number", () =>{

    expect(factorial(3)).toEqual(6);
})



it('throws an error if a negative input is provided', () => {
    expect(() => {
        factorial(-1);
    }).toThrowError('Factorial is only defined for non-negative integers');
});



});

