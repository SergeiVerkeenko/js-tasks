// 3. Реализуйте функцию, которая определяет корректную расположение скобок.
// ( ) [ ] { } -> true
// ( ) [ ] { } ) ( ) ) -> false

function isValid(srt) {
    const block = {

        ')': '(',
        '}': '[',
        '}': '{'
    }
    const res = []
    const close = ['}', '}', ')']
    for (let el of srt) {
        if (close.includes(el)) {
            if (block[el] != res.pop()) return false
        } else {
            res.push(el)
        }
    }
    return true
}
console.log(isValid('([)]'));
