/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 *
 * // reverse('awesome') // 'emosewa'
 * // reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(string) {
    if (typeof string !== "string") return

    if (!string) return '';

    let result = '';

    function helper(str) {
        if (str.length === 0) return

        result += str.charAt(str.length - 1)

        helper(str.slice(0, str.length - 1))
    }

    helper(string)

    return result;
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
