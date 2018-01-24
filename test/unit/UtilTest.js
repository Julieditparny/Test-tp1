describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe("Arrangement", function(){
    var testCases = [
        {
            n : 3,
            r : 2,
            arrangement : 6
        },
        {
            n : 4,
            r : 3,
            arrangement : 24
        },
        {
            n : 5,
            r : 4,
            arrangement : 120
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " when r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r );
            expect(result).toEqual(testCase.arrangement);
        })
    });

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.arrangement(-1,5);
        }
        expect(f).toThrow('Unable to compute arrangement for n < 0');
    });

    it("should raise an exception when n = r", function(){
        var f = function(){
            Util.arrangement(5,5);
        }
        expect(f).toThrow('Unable to compute arrangement for n = r');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.arrangement('test',6);
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    });

    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.arrangement(5,'test');
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    });
});

describe("Combination", function(){
    var testCases = [
        {
            n : 3,
            r : 2,
            combination : 3
        },
        {
            n : 4,
            r : 3,
            combination : 4
        },
        {
            n : 5,
            r : 4,
            combination : 5
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.combination + " when n = " + testCase.n + " when r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r );
            expect(result).toEqual(testCase.combination);
        })
    });

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.combination(-1,5);
        }
        expect(f).toThrow('Unable to compute combination for n < 0');
    });

    it("should raise an exception when r < 0", function(){
        var f = function(){
            Util.combination(5,-5);
        }
        expect(f).toThrow('Unable to compute combination for r < 0');
    });

    it("should raise an exception when r = n", function(){
        var f = function(){
            Util.combination(5,5);
        }
        expect(f).toThrow('Unable to compute combination for n = r');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.combination('test',6);
        }
        expect(f).toThrow('Unable to compute combination of non integer values');
    });

    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.combination(5,'test');
        }
        expect(f).toThrow('Unable to compute combination of non integer values');
    });

});

describe("IsPrime", function(){
    var testCases = [
        {
            n : 2,
            return: true
        },
        {
            n : 4,
            return: false
        },
        {
            n : 13,
            return: true
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.return + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.return);
        })
    });

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.isPrime(-1);
        }
        expect(f).toThrow('Unable to compute isPrime for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.isPrime('test');
        }
        expect(f).toThrow('Unable to compute isPrime of non integer values');
    });
});

describe("SumPrime", function(){
    var testCases = [
        {
            n : 6,
            sumPrime: 10
        },
        {
            n : 8,
            sumPrime: 17
        },
        {
            n : 9,
            sumPrime: 17
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.return + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.return);
        })
    });

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.sumPrime(-1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.isPrime('test');
        }
        expect(f).toThrow('Unable to compute sumPrime of non integer values');
    });
});

describe("FizzBuzz", function(){
    var testCases = [
        {
            n : 3,
            return: [1, 2, "Fizz"]
        },
        {
            n : 6,
            return: [1, 2, "Fizz", 4, "Buzz", "Fizz"]
        },
        {
            n : 15,
            return: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.return + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.return);
        })
    });

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.fizzBuzz(-1);
        }
        expect(f).toThrow('Unable to compute fizzBuzz for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.fizzBuzz('test');
        }
        expect(f).toThrow('Unable to compute fizzBuzz of non integer values');
    });
});