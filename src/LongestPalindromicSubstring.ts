export function LongestPalindromicSubstring(input: string): string {

    const input_length = input.length

    let result = ""

    for (let index = 0; input_length > index; index++) {

        for (let number = index + 1; input_length > number; number++) {

            if (input[number] === input[index]) {
                result = input.slice(index, number + 1);
            }
        }

    }

    return result
}