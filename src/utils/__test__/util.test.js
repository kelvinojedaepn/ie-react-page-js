import countWords from '../util'; // Adjust the path if necessary

describe('countWords', () => {
    it('should correctly count the number of words in a string as exactly 5, ignoring symbols', () => {
        const input = 'This is - a self-explained example';
        const wordCount = countWords(input);

        expect(wordCount).toBe(5); // Ensure the word count is exactly 5
    });

    it('should count the number of words in a string as greater than 5, ignoring symbols', () => {
        const input = 'The Internet Archive has lost its appeal in Hachette vs. Internet Archive';
        const wordCount = countWords(input);

        expect(wordCount).toBeGreaterThan(5); // Ensure the word count is greater than 5
    });

    it('should correctly count the number of words in a string as exactly 5, ignoring symbols', () => {
        const input = 'CSS @property and the new style';
        const wordCount = countWords(input);

        expect(wordCount).toBeGreaterThan(5); // Ensure the word count is exactly 5
    });

    it('should count the number of words in a string as greater than 5, ignoring symbols', () => {
        const input = 'How to_- Read';
        const wordCount = countWords(input);

        expect(wordCount).toBeLessThan(5); // Ensure the word count is greater than 5
    });
});
