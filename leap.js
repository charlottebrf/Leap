var Year = function (input) {
    Year.prototype.isLeap = function (input) {
        let trueOrFalse = null;
        if (this.isDivisblebyFour(input) === true && this.isDivisbleby100(input) === false ) {
            trueOrFalse = true;
        } else if (this.isDivisblebyFour(input) === true && this.isDivisbleby100(input) === true && this.isDivisbleby400(input) === true ){
            trueOrFalse = true;
        } else {
            trueOrFalse = false;
        }
        return trueOrFalse;
    };

    Year.prototype.isDivisblebyFour = function (input) {
        return input % 4 === 0 ? true : false;
    };

    Year.prototype.isDivisbleby100 = function (input) {
        return input % 100 === 0 ? true : false;
    };

    Year.prototype.isDivisbleby400 = function (input) {
        return input % 400 === 0 ? true : false;
    };
};

module.exports = Year;

// every 4 years there is a leap year - if divisible by 4 will be unless it's also divisible by 100
// every century is skipped - if divisible by 100 won't be a leap year
// if divisible by 400 will be  a leap year
//
// if it's a multiple of 4
//     skip if a new century
// unless divisible by 400
