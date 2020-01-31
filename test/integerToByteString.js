"use strict";

import { describe, it } from "mocha";
import { expect } from "chai";
import { integerToByteString, IntegerToByteStringArgumentCountError, IntegerToByteStringTypeError, IntegerToByteStringNotIntegerError } from "../integerToByteString.js";

describe("integerToByteString.js", function() {
    it("It should expose a function named integerToByteString.", function() {
        expect(integerToByteString).to.be.a("function");
    });

    it("It should expected exactly one argument.", function() {
        expect(integerToByteString.length).to.equal(1);
    });

    it("It should expose a class called IntegerToByteStringArgumentCountError extending the Error class.", function() {
        expect(IntegerToByteStringArgumentCountError).to.be.a("function");
        expect(new IntegerToByteStringArgumentCountError()).to.be.instanceof(Error);
    });

    it("It should expose a class called IntegerToByteStringTypeError extending the Error class.", function() {
        expect(IntegerToByteStringTypeError).to.be.a("function");
        expect(new IntegerToByteStringTypeError()).to.be.instanceof(Error);
    });

    it("It should expose a class called IntegerToByteStringNotIntegerError extending the Error class.", function() {
        expect(IntegerToByteStringNotIntegerError).to.be.a("function");
        expect(new IntegerToByteStringNotIntegerError()).to.be.instanceof(Error);
    });

    it("It should throw an IntegerToByteStringArgumentCountError when providing an incorrect amount of parameters.", function() {
        expect(() => integerToByteString()).to.throw(IntegerToByteStringArgumentCountError);
        expect(() => integerToByteString(15)).to.not.throw();
        expect(() => integerToByteString(1, 2)).to.throw(IntegerToByteStringArgumentCountError);
    });

    it("It should throw an IntegerToByteStringTypeError when providing an incorrect type.", function() {
        expect(() => integerToByteString("1")).to.throw(IntegerToByteStringTypeError);
        expect(() => integerToByteString("1")).to.throw(IntegerToByteStringTypeError);
    });
    
    it("It should throw an IntegerToByteStringNotIntegerError when providing an non-integer parameter.", function() {
        expect(() => integerToByteString(1.1)).to.throw(IntegerToByteStringNotIntegerError);
    });

    it("It should return the byte representation of an integer.", function() {
        expect(integerToByteString(15)).to.equal("1111");
        expect(integerToByteString(16)).to.equal("10000");
    });
});
