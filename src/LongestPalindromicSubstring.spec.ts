import { LongestPalindromicSubstring } from './LongestPalindromicSubstring';

describe('Longest Palindromic Substring', () => {


    test('if input is reversed it should return as same Palindromic ', () => {

        expect(LongestPalindromicSubstring("babad")).toBe("aba");
        expect(LongestPalindromicSubstring("cbbd")).toBe("bb");
    });

});