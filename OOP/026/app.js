function nam(b) {
    return (a) => {
        return (c) => {
            return a * b * c
        }
    }
}

console.log(nam(1)(2)(3));

function zam() {
    let a = 0
    return () => {
        return ++a
    }
}
const b = zam();
console.log(b());
console.log(b());
console.log(b());
console.log(b());

function rec(x) {
    if (x == 1) return 1
    return x * rec(x - 1)
}