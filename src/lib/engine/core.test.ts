import { describe, it, expect } from 'vitest';
import { getMoves, move } from '$lib/engine/core';

describe(() => {
	it('should move a piece', () => {
		expect(move({})).toEqual({});
	});

	describe("get moves for piece", () => {
		it('should give moves for king', () => {
			expect(getMoves("king", { col: 5, row: 5 })).toEqual([
				"f6", "g5", "g4", "f4", "e5", "e6"
			])
			expect(getMoves("king", "j6")).toEqual([
				"j7", "k6", "k5", "j5", "i6", "i7"
			])
			expect(getMoves("king", "a6")).toEqual([
				"b7", "b6", "a5"
			])
		});
	})

	describe(("game board") => {
		it('should hit board field', () => {
			 expect()
		});
	})
})

