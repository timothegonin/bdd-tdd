describe("Bowling game", function () {
	it("should properly calculate a gutter game", function () {
		rollMany(20, 0);
		expect(game.score().toEqual(0));
	});

	it("should properly calculate a strike", function () {
		//test
	});

	it("should properly calculate a spare", function () {
		//test
	});
});
