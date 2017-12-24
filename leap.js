var Year = function (input) {
    Year.prototype.isLeap = function (input) {
        let trueOrFalse = null;
        if (this.isDivisblebyInteger(input, 4) === true && this.isDivisblebyInteger(input, 100) === false ) {
            trueOrFalse = true;
        } else if (this.isDivisblebyInteger(input, 4) === true && this.isDivisblebyInteger(input, 100) === true && this.isDivisblebyInteger(input, 400) === true ){
            trueOrFalse = true;
        } else {
            trueOrFalse = false;
        }
        return trueOrFalse;
    };

    Year.prototype.isDivisblebyInteger = function (input, integer) {
        return input % integer === 0 ? true : false;
    };
};

module.exports = Year;

