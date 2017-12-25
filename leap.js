var Year = function (input) {
    this.maybeLeapYear = input;
};

Year.prototype.isLeap = function () {
    return (this.maybeLeapYear % 4 === 0 && this.maybeLeapYear % 100 !== 0) || this.maybeLeapYear % 400 === 0 ? true : false;
};

module.exports = Year;


