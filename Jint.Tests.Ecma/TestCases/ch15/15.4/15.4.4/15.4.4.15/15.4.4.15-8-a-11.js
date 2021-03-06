/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-a-11.js
 * @description Array.prototype.lastIndexOf - deleting own property causes index property not to be visited on an Array-like object
 */


function testcase() {

        var arr = { length: 200 };

        Object.defineProperty(arr, "1", {
            get: function () {
                return 6.99;
            },
            configurable: true
        });

        Object.defineProperty(arr, "100", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        return -1 === Array.prototype.lastIndexOf.call(arr, 6.99);
    }
runTestCase(testcase);
