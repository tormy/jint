/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-318.js
 * @description Object.defineProperty - 'O' is an Arguments object, 'name' is generic own data property of 'O', test TypeError is thrown when updating the [[Writable]] attribute value of 'name' which is not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        return (function () {
            Object.defineProperty(arguments, "genericProperty", {
                writable: false,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "genericProperty", {
                    writable: true
                });
            } catch (e) {
                return e instanceof TypeError &&
                    dataPropertyAttributesAreCorrect(arguments, "genericProperty", undefined, false, false, false);
            }
            return false;
        }(1, 2, 3));
    }
runTestCase(testcase);
