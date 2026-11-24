const assert = require("node:assert/strict");
const { describe, it } = require("node:test");
const { add2 } = require("../index");

describe("test1", () => {
	it("add2(2) == 4", () => {
		assert.equal(add2(2), 4);
	});
	it("add2(-2) == 0", () => {
		assert.equal(add2(-2), 0);
	});
});
