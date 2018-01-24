describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - includes", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 19),
        new Interval(10, 20)

    ].forEach(function (interval) {
        it("should includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22),
        new Interval(18,25),
        new Interval(2,15)

    ].forEach(function (interval) {
        it("should not includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    var testCases = [
        {
            interval: new Interval(8, 12),
            return: [new Interval(8,20)]
        },
        {
            interval: new Interval(15, 16),
            return: [new Interval(10,20)]
        },
        {
            interval: new Interval(2,6),
            return: [new Interval(2,6),new Interval(10,20)]
        },
        {
            interval: new Interval(26,100),
            return: [new Interval(10,20),new Interval(26,100)]
        }


    ].forEach(function (interval) {
        it("should union " + testedInterval.toString() + " and " + interval.toString(), function () {
            var result = testedInterval.union(testCase.interval);
            expect(result).toEqual(testCase.return);
        });
    });
});

describe("Interval - intersection", function () {
    testedInterval = new Interval(10, 20);

    var testCases = [
        {
            interval: new Interval(8, 12),
            return: [new Interval(10,12)]
        },
        {
            interval: new Interval(15, 16),
            return: [new Interval(15,16)]
        },
        {
            interval: new Interval(2,6),
            return: [new Interval(2,6),new Interval(10,20)]
        },
        {
            interval: new Interval(26,100),
            return: [new Interval(10,20),new Interval(26,100)]
        }


    ].forEach(function (interval) {
        it("should intersection " + testedInterval.toString() + " and " + interval.toString(), function () {
            var result = testedInterval.intersection(testCase.interval);
            expect(result).toEqual(testCase.return);
        });
    });
});

describe("Interval - exclusion", function () {
    testedInterval = new Interval(10, 20);

    var testCases = [
        {
            interval: new Interval(8, 12),
            return: [new Interval(8,10), new Interval(12,20)]
        },
        {
            interval: new Interval(15, 16),
            return: [new Interval(10,15),new Interval(16,20)]
        },
        {
            interval: new Interval(2,6),
            return: [new Interval(2,6),new Interval(10,20)]
        },
        {
            interval: new Interval(26,100),
            return: [new Interval(10,20),new Interval(26,100)]
        }


    ].forEach(function (interval) {
        it("should exclusion " + testedInterval.toString() + " and " + interval.toString(), function () {
            var result = testedInterval.exclusion(testCase.interval);
            expect(result).toEqual(testCase.return);
        });
    });
});