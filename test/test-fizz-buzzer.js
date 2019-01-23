const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
    it('should return keywords fizz-buzz, buzz, or fizz for numbers divisible by 15, 5, and 3 respectively', function(){
        const divisibleCases = [
            {num: 45, expected: 'fizz-buzz'},
            {num: -30, expected: 'fizz-buzz'},
            {num: 0, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: -20, expected: 'buzz'},
            {num: 6, expected: 'fizz'},
            {num: -18, expected: 'fizz'}
        ];
        divisibleCases.forEach(function(input) {
            const response = fizzBuzzer(input.num);
            expect(response).to.equal(input.expected);
        });
    });
    it('should raise an error if argument is not a number', function(){
        const badCases = ['a', '1', true, false];
        badCases.forEach(function(input){
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
    it('should return the argument if it is a number and not divisible by 3, 5, or 15', function(){
        const nonDivCases = [41, 2, -11];
        nonDivCases.forEach(function(input){
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
});