var Year = function (input) {
    Year.prototype.isLeap = function (input) {
        let trueOrFalse = null;
        if (this.isEven(input, 4) === true && this.isEven(input, 100) === false) {
            trueOrFalse = true; }
        else if (this.isEven(input, 4) === true && this.isEven(input, 100) === true) {
            if (this.isEven(input, 100) === true && this.isEven(input, 400) === true) {
                trueOrFalse = true;
            } else if (this.isEven(input, 100) === true && this.isEven(input, 400) === false) {
                    trueOrFalse = false;
            }
        } else {
            trueOrFalse = false;
        }
        return trueOrFalse;
    };

    Year.prototype.isEven = function (input, integer) {
        let oddOrEven = input / integer;
        return oddOrEven % 2 === 0 ? true : false;
    };
};

module.exports = Year;
